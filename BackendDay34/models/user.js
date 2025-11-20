/** @format */

let mongoose = require("mongoose");

let userSchecma = mongoose.Schema(
  {
    userName: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timeStamp: true },
);

let userModel = mongoose.model("user", userSchecma);

module.exports = userModel;
