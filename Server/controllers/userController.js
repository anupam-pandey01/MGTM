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
      amount
    } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        phone,
        education,
      });
    }

    const purchase = await Purchase.create({
      user: user._id,
      service,
      product,
      amount,
      paymentStatus:
        amount === 0 ? "free" : "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Purchased successfully",
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