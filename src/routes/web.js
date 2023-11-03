//import
const express = require("express");
const { getHomepage, getLongPage } = require("../controllers/homeController");
const router = express.Router();

//Khai bao route
router.get("/", getHomepage);

router.get("/long", getLongPage);

module.exports = router;
