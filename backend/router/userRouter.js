const express = require('express')
const userController = require('../controller/userController')
const authController = require('../controller/auth')
const userRouter = express.Router()

userRouter
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createUser);
userRouter
  .route('/:id')
  .get(userController.getOneUser)
  .patch(userController.UpdateUser)
  .delete(userController.DeleteUser);

userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);


module.exports = userRouter