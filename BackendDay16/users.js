const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DataBase");
let userData = mongoose.Schema({
  userName: String,
  name: String,
  age: Number,
});

// mongoose.model(naam , schema)
module.exports = mongoose.Schema("users", userData);
