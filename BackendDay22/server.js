/** @format */

const express = require("express");
const connectDB = require("./config/db");
let productModel = require("./models/product");
const app = express();
const port = 3000;
connectDB();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/product", async (req, res) => {
  res.render("index");
});
app.post("/product", async (req, res) => {
  let { name, price, description, rating } = req.body;
  let pro = await productModel.create({
    name: name,
    price: price,
    description: description,
    rating: rating,
  });
  console.log(pro)
  res.send(pro);
});

app.get('/read' , async (req , res)=>{
  let val = await productModel.find()
  res.send(val)
})

app.get('/update' , async (req , res)=>{
  let up = await productModel.updateMany({rating : 2} , {name:"pinaple"})
  res.send(up)
})

app.get('/del' , async (req , res)=>{
  let d = await productModel.findOneAndDelete({name:"pinaple"} , {name:"good"})
  res.send(d)
})

app.listen(port, () =>
  console.log(`🚀 Server running on http://localhost:${port}`),
);
