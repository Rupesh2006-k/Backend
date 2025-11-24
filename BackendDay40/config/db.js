/** @format */

let mongoose = require("mongoose");

let connectDB = async () => {
  try {
    // let res = mongoose.connect(process.env.MONGO_URL);
    let res = mongoose.connect('mongodb://127.0.01:27017/queryOperator');
    console.log("connected");
    return res
  } catch (error) {
    console.log("error to connect mongodb");
  }
};


module.exports = connectDB
