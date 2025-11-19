/** @format */

import express from "express";
import { connectDB } from "./config/db.js";
import { UserModel } from "./models/product.model.js";
const app = express();
const port = 3000;
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let ans = await UserModel.create([
    {
      name: "Rupesh",
      password: "123",
      email: "a@a.com",
    },
    {
      name: "ahswin",
      password: "123",
      email: "a@a.com",
    },
  ]);
  console.log(ans);
  res.send(ans);
});

app.get("/read", async (req, res) => {
  let ans = await UserModel.find();
  res.send(ans);
});
app.get("/update", async (req, res) => {
  let ans = await UserModel.findOneAndUpdate(
    { name: "Rupesh" },
    { name: "Rupesh kushwaha" },
  );
  res.send(ans);
});
app.get("/delete", async (req, res) => {
  let ans = await UserModel.findOneAndDelete({ name: "Rupesh" });
  res.send(ans);
});
app.get("/up", async (req, res) => {
  let ans = await UserModel.findOneAndUpdate(
    { name: "Rupesh" },
    { name: "kavita" },
    { now: true },
  );
  res.send(ans);
});
app.get("/del", async (req, res) => {
  let ans = await UserModel.deleteOne({ email: "a@a.com" } , {new : true});
  res.send(ans);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
