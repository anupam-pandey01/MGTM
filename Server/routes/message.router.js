const { createMessage, getAllMessages } = require("../controllers/messageController");
const authAdmin = require("../middleware/authAdmin");
const messageRouter = require("express").Router();

messageRouter.post("/message", createMessage);
messageRouter.get("/message",authAdmin, getAllMessages);

module.exports = messageRouter