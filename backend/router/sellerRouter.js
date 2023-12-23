const express = require('express')
const authController = require('../controller/auth')

const userRouter = express.Router()

// userRouter
//   .route('/')
//   .get(userController.getAllUser)

userRouter.post('/signup', authController.signupSeller);
userRouter.post('/login', authController.loginSeller);


module.exports = userRouter