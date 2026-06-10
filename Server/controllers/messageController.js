const Message = require("../models/message");

const createMessage = async (req, res) => {
  try {
    const { inquiryType, name, organizationName, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await Message.create({
      inquiryType,
      name,
      organizationName,
      email,
      phone,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "We will contact you with in the 24 hr",
    });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


module.exports = {
    createMessage,
    getAllMessages
}