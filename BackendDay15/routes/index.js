// /** @format */

// var express = require("express");
// var router = express.Router();
// let userModel = require("./users");

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
// router.get("/create", async function (req, res) {
//   let users = await userModel.insertMany([
//     {
//       userName: "Rupesh Kushwaha",
//       name: "Rupesh",
//       age: 18,
//     },
//     {
//       userName: "Harsh",
//       name: "Harsh",
//       age: 28,
//     },
//     {
//       userName: "Mohan",
//       name: "Mohan",
//       age: 22,
//     },
//   ]);

//   res.send(users);
// });

// router.get("/findOne", async (req, res) => {
//   let finder = await userModel.findOne({ age: 18 });
//   res.send(finder);
//   console.log(finder);
// });

// router.get("/userDel", async (req, res) => {
//   let del = await userModel.findOneAndDelete({ age: 18 });
//   console.log(del);
//   res.send(del);
// });

// router.get("/allusers", async (req, res) => {
//   let allusers = await userModel.find();
//   res.send(allusers);
// });

// module.exports = router;


