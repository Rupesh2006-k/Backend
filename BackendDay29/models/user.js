/** @format */

let mongoose =  require("mongoose")

const userSchema = new mongoose.Schema(
  {
    name: { type: String,  },
    email: { type: String, },
    image: { type: String, }, // String, not Number
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel