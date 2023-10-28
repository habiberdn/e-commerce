const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.route('/').get(productController.getAllData).post(productController.createData).delete(productController.deleteData)

module.exports = router