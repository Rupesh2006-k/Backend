const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
});

let productModel = mongoose.model("product", productSchema);

module.exports = productModel;
