/** @format */

let express = require("express");
let path = require("path");
let connectDB = require("./config/db");
let UserModel = require("./models/user.js");
const app = express();
const port = 3000;
connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let user = await UserModel.find();
  console.log(user);
  res.render("read", { user });
});

app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let ans = await UserModel.create({ name, email, image });
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  let user = await UserModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});
app.get("/edit/:id", async (req, res) => {
  let user = await UserModel.findOne({ _id: req.params.id });
  res.render("edit", { user });
});
app.post("/update/:id", async (req, res) => {
  let { name, email, image } = req.body;
  let user = await UserModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, image, email },
    { new: true },
  );
  res.redirect("/read");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
