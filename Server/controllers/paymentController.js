const Razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("../models/user");
const Purchase = require("../models/purchase");

require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, purchaseId } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: purchaseId,

      notes: {
        purchaseId,
        amount,
      },
    };

    const order = await razorpay.orders.create(options);

    await Purchase.findByIdAndUpdate(purchaseId, {
      razorpayOrderId: order.id,
    });

    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(200).json({
        success: false,
        message: {
          heading: "Payment Failed",
          msg: "Please try again or contact the MGTM team.",
        },
      });
    }

    const order = await razorpay.orders.fetch(razorpay_order_id);

    const purchase = await Purchase.findOne({
      razorpayOrderId: razorpay_order_id,
    });

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: "Purchase not found",
      });
    }

    purchase.paymentStatus = "paid";
    purchase.amount = Number(order.notes.amount);
    purchase.razorpayPaymentId = razorpay_payment_id;

    await purchase.save();

    return res.status(200).json({
      success: true,
      message: {
        heading: "Payment Successful",
        msg: "All credentials/details will be sent to your email within 24 hours.",
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Sever Error",
    });
  }
};
