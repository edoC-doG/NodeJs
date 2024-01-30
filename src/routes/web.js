//import
const express = require("express");
const { getHomepage, getLongPage, postCreateUser, getCreatePage, postUpdateUser } = require("../controllers/homeController");
const router = express.Router();

//Khai bao route
router.get("/", getHomepage);

router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
router.post("/edit-user", postUpdateUser);

router.get("/long", getLongPage);

module.exports = router;
