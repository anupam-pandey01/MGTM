const User = require("../models/user.js");
const Purchase = require("../models/purchase");

const purchaseService = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      education,
      service,
      product,
      amount,
    } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        phone,
        education,
      });
    } else {
      // Update user details if changed
      user.name = name;
      user.phone = phone;
      user.education = education;

      await user.save();
    }

    let purchase;

    const existingPurchase = await Purchase.findOne({
      user: user._id,
      product,
      amount
    });

    if (existingPurchase) {
      if (existingPurchase.paymentStatus === "pending") {
        purchase = existingPurchase;
      }
      else if (existingPurchase.paymentStatus === "paid") {
        
        return res.status(400).json({
          success: false,
          message: "You have already purchased this product.",
        });
      }
      else if (existingPurchase.paymentStatus === "free") {
        
        return res.status(400).json({
          success: false,
          message: "You have already applied for this free service.",
        });
      }
    }

    if (!purchase) {
      purchase = await Purchase.create({
        user: user._id,
        service,
        product,
        amount,
        paymentStatus: amount === 0 ? "free" : "pending",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        existingPurchase?.paymentStatus === "pending"
          ? "Pending payment found. Continue your payment."
          : "Purchase initialized successfully.",
      purchaseId: purchase._id,
      userId: user._id,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  purchaseService,
};