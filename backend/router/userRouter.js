const express = require('express')
const userController = require('../controller/userController')
const authController = require('../controller/auth')

const userRouter = express.Router()

userRouter
  .route('/')
  .get(userController.getAllUser)

userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);
userRouter.get('/logout', authController.logout);

module.exports = userRouter