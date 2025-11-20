/** @format */

let mongoose = require("mongoose");
let productXSchema = mongoose.Schema({
  name: String,
  price: Number,
  productsY: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "productY",
    },
  ],
});

let productXModel = mongoose.model("productX", productXSchema);

module.exports = productXModel;
