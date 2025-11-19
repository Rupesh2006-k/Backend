
let mongoose = require("mongoose");

let userSchecma = mongoose.Schema({
  userName: String,
  name: String,
  email: String,
  password: String,
  age: Number,
});

let userModel = mongoose.model("user", userSchecma);

module.exports = userModel;
