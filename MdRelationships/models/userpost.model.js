/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  username: String,
  email: String,
});

let userpostModel = mongoose.model("user", userSchema);
module.exports = userpostModel;
