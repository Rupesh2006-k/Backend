let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  userName: String,
  addresses: [
    {
      location: String,
      city: String,
      _id:false
    },
  ],
});

let UserModel = mongoose.model("MDRs" , userSchema);
module.exports = UserModel;
