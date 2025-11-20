/** @format */

let mongoose = require("mongoose");

let postSchecma = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

let userModel = mongoose.model("post", postSchecma);

module.exports = userModel;
