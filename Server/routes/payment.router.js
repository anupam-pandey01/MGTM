const { createOrder, verifyPayment } = require("../controllers/paymentController");

const paymentRouter = require("express").Router();

paymentRouter.post("/create-order", createOrder);
paymentRouter.post("/verify-payment", verifyPayment);

module.exports = paymentRouter;