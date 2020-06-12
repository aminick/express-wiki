const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("/page/Main_Page");
});

router.get("/page", function (req, res, next) {
  res.redirect("/page/Main_Page");
});

router.get("/search", indexController.search_get);

module.exports = router;
