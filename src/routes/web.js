//import
const express = require("express");
const { getHomepage, getLongPage, postCreateUser, getCreatePage, postUpdateUser, getUpdatePage, postDeleteUser, postHandleRemoveUser } = require("../controllers/homeController");
const router = express.Router();

//Khai bao route
router.get("/", getHomepage);
router.get("/long", getLongPage);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);


module.exports = router;
