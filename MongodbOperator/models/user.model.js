/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    city: String,
    email: String,
    rating: Number,
    marks: Number,
    amount: Number,
    items:Array
  },
  { timestamps: true },
);

let UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
