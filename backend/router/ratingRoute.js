const express = require("express");
const ratingController = require("../controller/ratingController");
const router = express.Router();


router.route('/').get(ratingController.getAllData)

module.exports = router;
