const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();
const middleware = require('../controller/middleware')
const authController = require('../controller/auth')


router.use(middleware.ratingQuantity)
router
  .route("/")
  .get(productController.getAllData)
  .post(authController.protect,productController.uploadImage,productController.resizeUserPhoto,productController.createData)
  .delete(productController.deleteAllData)
  
router.route('/:id').patch(productController.updateData).get(productController.getOne).delete(productController.deleteData);
router.route('/:id/:sort').get(productController.getAllData).patch(productController.updateData).get(productController.getOne).delete(productController.deleteData);


module.exports = router;
