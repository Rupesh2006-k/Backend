/** @format */

const express = require("express");
const app = express();
const port = 3000;
let connectDB = require("./config/db");
connectDB();
let Model = require("./models/product.model");
let UserModel = require("./models/user.model");

// app.get("/find", async (req, res) => {
//   let find = await UserModel.find({
//     marks: { $not: { $gt: 75 } },
//   });

//   res.send(find);
// });

// app.get("/find", async (req, res) => {
//   let find = await UserModel.find({
//     rating: { $not: { $gte: 3.9 } },
//   });

//   res.send(find);
// });

// app.get("/find", async (req, res) => {
//   let find = await UserModel.find({
//     $nor: [{ marks: { $gt: 76 } }, { city: "Delhi" }],
//   });
//   res.send(find);
// });

// app.get("/find", async (req, res) => {
//   let find = await UserModel.updateOne(
//     { name: "Harshit Rao" },
//     { $pop: { items: -1 } } // last item remove
//   );

//   res.send(find);
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
