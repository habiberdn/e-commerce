const express = require('express')
const userController = require('../controller/userController')
const sellerController = require('../controller/sellerController')
const authController = require('../controller/auth')

const userRouter = express.Router()

userRouter
  .route('/')
  .get(userController.getAllUser)
  .patch(sellerController.updateUser)

userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);

module.exports = userRouter