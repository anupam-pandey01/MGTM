const Razorpay = require("razorpay");
const crypto = require("crypto");
const User = require("../models/user");
const Purchase = require("../models/purchase");
const transporter = require("../config/email.config");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, purchaseId } = req.body;

    // Find purchase
    const purchase = await Purchase.findById(purchaseId);

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: "Purchase not found",
      });
    }

    // Already paid?
    if (purchase.paymentStatus === "paid") {
      return res.status(400).json({
        success: false,
        message: "This purchase has already been paid.",
      });
    }

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

    purchase.razorpayOrderId = order.id;

    await purchase.save();

    return res.status(200).json(order);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

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
    }).populate("user")

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

    try {
      await transporter.sendMail({
        from: `"MGTM Consultancy" <${process.env.EMAIL_USER}>`,
        to: purchase?.user?.email,
        subject: "Payment Confirmation",
        html: `
        <h2>Payment Successful 🎉</h2>
        <p>Dear ${purchase.user.name},</p>

        <p>Thank you for enrolling with MGTM Consultancy.</p>

        <p>We have successfully received your payment.</p>

        <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
        <p><strong>Amount:</strong> ₹${purchase.amount}</p>

        <p>Our team will contact you shortly with the next steps.</p>

        <p>Regards,<br/>MGTM Consultancy</p>
      `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

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
