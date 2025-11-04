/** @format */

var express = require("express");
var router = express();
let userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/create", async function (req, res) {
  let createdUser = await userModel.create({
    userName: "Rupesh Kushwaha",
    name: "Rupesh",
    age: 18,
  });
  res.send(createdUser);
});

module.exports = router;
