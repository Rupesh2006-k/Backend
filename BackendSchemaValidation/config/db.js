/** @format */

let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    let res = await mongoose.connect(
      "mongodb://localhost:27017/chatui",
    );
    console.log("connected");
    return res;
  } catch (error) {
    console.log("error");
  }
};

module.exports = connectDB;
