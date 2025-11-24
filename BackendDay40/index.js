/** @format */

const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const StudentModel = require("./models/student.model");
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hey");
});
app.get("/hey", async (req, res) => {
  try {
    let find = await StudentModel.find({ age: { $gt: 12 } });
    res.send(find)
  } catch (error) {
    console.log("error a gaya ");
  }
  res.send("hey hey");
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
