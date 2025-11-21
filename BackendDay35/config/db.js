const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/multer');
    console.log("Connected");
  } catch (error) {
    console.log("Failed", error);
  }
};

module.exports = connectDB;
