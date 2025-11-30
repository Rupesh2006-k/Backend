/** @format */

let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    let res = mongoose.connect("mongodb://127.0.0.1:27017/relationships");
    console.log("connected");
    return res;
  } catch (error) {
    console.log("error");
  }
};

module.exports = connectDB
