/** @format */

const express = require("express");
const connectDb = require("./db");
const User = require("./users");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb();
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/user", async (req, res) => {
  const { email, fullName } = req.body;
  const savedUser = await User.create({
    email,
    fullName,
  });
  res.status(201).json({message:"user created successfully",user:savedUser})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
