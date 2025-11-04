/** @format */

// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/DataBase");

// let userData = new mongoose.Schema({
//   userName: String,
//   name: String,
//   age: Number,
// });

// // create model
// module.exports = mongoose.model("users", userData);

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

let Data = mongoose.Schema({
  userName: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("rupesh", Data);
