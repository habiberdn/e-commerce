const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.route('/').get(productController.getAllData).post(productController.createData)

module.exports = router