/** @format */

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  rating: { type: String, required: true },
  date: {
    type: String,
    default: Date.now(),
  },
});
let ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
