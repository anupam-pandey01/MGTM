const { createMessage } = require("../controllers/messageController");
const messageRouter = require("express").Router();

messageRouter.post("/message", createMessage);

module.exports = messageRouter