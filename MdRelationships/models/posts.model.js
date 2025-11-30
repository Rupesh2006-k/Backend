let mongoose = require("mongoose");

let postSchema = mongoose.Schema({
  content:String,
  likes:Number,
  user: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
]
});

let postModel = mongoose.model("Post" , postSchema);
module.exports = postModel;
