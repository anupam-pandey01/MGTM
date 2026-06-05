const { createUser, purchaseService } = require('../controllers/userController');

const userRouter = require('express').Router();

userRouter.post("/save/user", purchaseService);

module.exports = userRouter;