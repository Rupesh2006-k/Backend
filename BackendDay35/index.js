const express = require("express");
const app = express();
const port = 3000;
let connectDB = require("./config/db");
const productXModel = require("./models/productX");
const productYModel = require("./models/productY");
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add", async (req, res) => {
  // 1. Create ProductY
  let y = await productYModel.create({
    name: "Small Box",
    price: 200,
  });

  // 2. Create ProductX and link ProductY inside it
  let x = await productXModel.create({
    name: "Main Product",
    price: 999,
    productsY: [y._id],
  });

  res.send({ x, y });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
