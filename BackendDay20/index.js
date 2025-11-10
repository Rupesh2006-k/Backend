/** @format */

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/operations");

let dataSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  marks: Number,
});
module.exports = mongoose.model("Data", dataSchema);


