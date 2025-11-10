/** @format */

const mongoose = require("mongoose");

let connection = mongoose
  .connect("mongodb://localhost:27017/student")
  .then(() => {
    console.log("Connected to daba base");
  });
module.exports = connection;
