const express = require('express')
const authController = require('../controller/auth')
const sellerController = require('../controller/sellerController')
const userRouter = express.Router()

userRouter
  .route('/')
  .get(sellerController.getAllUser)

userRouter.post('/signup', authController.signupSeller);
userRouter.post('/login', authController.loginSeller);


module.exports = userRouter