/** @format */

const express = require("express");
const app = express();
const port = 3000;
let flash = require("connect-flash");
let expressSession = require("express-session");

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "kuch",
  }),
);
app.use(flash());

app.set('view engine' , 'ejs')

app.get("/", (req, res) => {
  req.flash("success", "User created successfully!");
  res.redirect("/profile");
});


app.get("/profile", (req, res) => {
  res.render("index", { successMsg: req.flash("success") });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
