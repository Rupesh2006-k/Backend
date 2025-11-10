/** @format */

import { connectDB } from "./config/db.js";
import express from "express";
import { UserModel } from "./models/user.js";
const app = express();
const port = 3000;
connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/create", async (req, res) => {
  res.render("index");
});
app.post("/create", async (req, res) => {
  let { name, age } = req.body;
  UserModel.create({
    name: name,
    age: age,
  });
  console.log(name, age);

  res.send({ name, age });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
