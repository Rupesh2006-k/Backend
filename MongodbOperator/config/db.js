/** @format */

let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    let res = mongoose.connect("mongodb://localhost:27017/mongodbOperator");
    console.log("connected");
    return res;
  } catch (error) {
    console.log("error hai");
  }
};

module.exports = connectDB;
