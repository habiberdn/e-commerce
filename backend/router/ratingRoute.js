const express = require("express");
const ratingController = require("../controller/ratingController");
const router = express.Router();

router.route('/').get(ratingController.getAllData).post(ratingController.createData).delete(ratingController.delete)

module.exports = router;
