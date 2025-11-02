/** @format */

const express = require("express");
const app = express();
const port = 3000;

let userModel = require("./users.js");

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/userModel", async (req, res) => {
  try {
    let data = await userModel.create({
      userName: "Rupesh",
      name: "rupesh",
      age: 18,
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
