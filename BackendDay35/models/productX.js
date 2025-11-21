/** @format */

let mongoose = require("mongoose");
let productXSchema = mongoose.Schema({
pic:{
  type:String,
  default:'https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60'
}  
});

let productXModel = mongoose.model("productX", productXSchema);

module.exports = productXModel;
