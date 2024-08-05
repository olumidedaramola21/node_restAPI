const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!" });
});

module.exports = router;
