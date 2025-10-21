/** @format */
const express = require("express");
const app = express();

// 1️⃣ Set the view engine to EJS
app.set("view engine", "ejs");

// 2️⃣ Set the folder where your EJS files are stored
app.set("views", "./views");

// 3️⃣ Routes
// app.get("/:id", (req, res) => {
//   let { id } = req.params;
//   res.render("index", { id }); // no need to write .ejs
// });

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about"); // file name should be lowercase (best practice)
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// 4️⃣ Start the server
app.listen(3000, () => console.log("Example app listening on port 3000!"));
