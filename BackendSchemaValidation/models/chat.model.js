/** @format */

let mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
  from:{
    type:String,
    requied:true
  },
  to:{
    type:String,
    requied:true
  },
  msg:{
    type:String,
   maxLength:50
  },
  createdAt:{
    type:Date,
    requied:true
  },
})

let ChatModel = mongoose.model("cheat", chatSchema);
module.exports = ChatModel;
