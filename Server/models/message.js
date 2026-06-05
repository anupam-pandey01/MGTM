const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const messageSchema = new Schema({
  inquiryType: {
    type: "String",
    enum: ["individual", "organization"],
    required: true,
    default: "individual"
  },
  name: {
    type: "String",
    required: true,
  },
  organizationName: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  
},
{
    timestamps: true
});


const Message = mongoose.model("Message", messageSchema);
module.exports = Message;