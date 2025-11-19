const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/DataAssociation");
    console.log("connected successfully");
  } catch (error) {
    console.log("connection error:", error);
  }
};

module.exports = connectDB;
