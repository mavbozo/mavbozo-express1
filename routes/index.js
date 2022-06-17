var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "captain, oh my captain",
    description: "our fearful trip is done",
  });
});

module.exports = router;
