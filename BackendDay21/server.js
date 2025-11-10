require("./config/db");
const express = require("express");
const studentModel = require("./models/student");
const productModel = require("./models/product");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", (req, res) => {
  res.render("product");
});

app.post("/create", async (req, res) => {
  try {
    let { name, price, inStock, category } = req.body;
    await productModel.create({ name, price, inStock, category });
    res.send("Product created successfully!");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.get('/find' , async ( req , res)=>{
  let data = await productModel.findOneAndDelete({name:"orange"})
  res.send(data)
})


app.listen(port, () => console.log(`App listening on port ${port}!`));
