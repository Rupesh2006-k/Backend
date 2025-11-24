
let mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  name: String,
  age: Number,
  marks: Number,
  city: String,
});
let StudentModel = mongoose.model("student", userSchema);
module.exports = StudentModel;
