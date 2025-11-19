/** @format */

let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    let res = await mongoose.connect("mongodb://127.0.0.1:27017/miniApp1");
    console.log("Connection succesfully");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

module.exports = connectDB;
