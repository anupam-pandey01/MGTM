const adminRouter = require("./admin.router");
const messageRouter = require("./message.router");
const paymentRouter = require("./payment.router");
const servicesRouter = require("./services.router");
const userRouter = require("./user.router");
const mainRouter = require("express").Router()

mainRouter.use(servicesRouter);
mainRouter.use("/api/admin", adminRouter);
mainRouter.use(messageRouter);
mainRouter.use(userRouter);
mainRouter.use("/api/payment/", paymentRouter);

mainRouter.get("/", (req, res)=>{
    res.status(200).json({ success: true, message: "Api is working"});
})
module.exports = mainRouter