const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin