let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: String,
    rating: Number,
    amount: Number,
    performance: {
      m: String,
      q: String,
    },
    category: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

let Model = mongoose.model("product", userSchema);
module.exports = Model;
