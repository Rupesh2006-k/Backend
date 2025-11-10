const mongoose = require("mongoose");

let connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product");
    console.log("Connection successfully to mongoDB ");
  } catch (error) {
    console.log("Connection is failed to connect mongodb", error.message);
  }
};

module.exports = connectDB;
