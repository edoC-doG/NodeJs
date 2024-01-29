//import
const express = require("express");
const { getHomepage, getLongPage, postCreateUser } = require("../controllers/homeController");
const router = express.Router();

//Khai bao route
router.get("/", getHomepage);
router.post("/create-user", postCreateUser);

router.get("/long", getLongPage);

module.exports = router;
