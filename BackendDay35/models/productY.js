/** @format */

let mongoose = require("mongoose");

let productYSchema = mongoose.Schema({
  name: String,
  price: Number,
  date:{
    type:Date,
    default:Date.now
  }
});

let productYModel = mongoose.model("productX", productYSchema);

module.exports = productYModel