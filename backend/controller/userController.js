const userModel = require('../model/user')
const factoryModel = require('./handleFactory')

exports.getAllUser = factoryModel.getAll(userModel)
exports.getOneUser = factoryModel.getOne(userModel)
exports.UpdateUser = factoryModel.updateOne(userModel)
exports.DeleteUser = factoryModel.deleteOne(userModel)

exports.createUser = (req, res) => {
    res.status(500).json({
      status: 'error',
      message: 'This route is not yet defined!, Please use signup instead'
    }); //500 means internal server error
  };



