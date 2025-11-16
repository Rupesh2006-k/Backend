const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const users = require("./public/javascripts/user.js");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, " public")));
app.get("/", (req, res) => {
  res.render("index" , {users});
});
app.get("/add", (req, res) => {
  res.render("adduser");
});

app.post("/add", (req, res) => {
 let a = req.body
 console.log(a);
 users.push(a)
 res.redirect("/")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
