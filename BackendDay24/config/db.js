/** @format */

let mongoose = require("mongoose");

let connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");
    console.log('Connection successful');
  } catch (error) {
    console.log('Connection failed', error);
  }
};

module.exports = connectionDB;
