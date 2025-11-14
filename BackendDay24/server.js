const express = require("express");
const app = express();
const port = 3000;
let connectionDB = require("./config/db.js");
connectionDB();
let testModel = require("./models/test");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  let data = await testModel.insertMany([
    { name: "kavita", age: 24, email: "k@k.com" },
    { name: "ashwin", age: 19, email: "a@a.com" },
    { name: "rupesh", age: 19, email: "r@r.com" },
  ]);
  console.log(data);
  res.send(data);
});
app.get("/create", async (req, res) => {
  let data = await testModel.create([
    { name: "kavita", age: 24, email: "k@k.com" },
    { name: "ashwin", age: 19, email: "a@a.com" },
    { name: "rupesh", age: 19, email: "r@r.com" },
  ]);
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
