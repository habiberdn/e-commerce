const express = require("express");
const ratingController = require("../controller/ratingController");
const ratingMiddleware = require('../controller/middleware')
const router = express.Router();

router.route('/').get(ratingController.getAllData).post(ratingController.createData).delete(ratingController.delete)
router.route("/:product").get(ratingMiddleware.ratings)

module.exports = router;
