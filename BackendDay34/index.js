/** @format */

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
let userModel = require('./models/user')

app.use(cookieParser());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
let  {name , username , email , password , age} = req.body

let user = await userModel.findOne({email})
if(user) return res.send('user already registerd')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
