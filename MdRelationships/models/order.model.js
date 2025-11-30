let mongoose = require("mongoose");

let orderSchema = mongoose.Schema({
  item:String,
  price:Number
});

let orderModel = mongoose.model("order" , orderSchema);
module.exports = orderModel;
