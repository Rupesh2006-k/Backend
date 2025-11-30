let mongoose = require("mongoose");

let customerSchema = mongoose.Schema({
  name:String,
  orders:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"order"
    }
  ]
});

let customerModel = mongoose.model("customer" , customerSchema);
module.exports = customerModel;
