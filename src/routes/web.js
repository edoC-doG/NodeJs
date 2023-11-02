//import
const express = require("express");
const router = express.Router();



//Khai bao route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/long", (req, res) => {
  res.render("sample.ejs");
});



module.exports = router;
