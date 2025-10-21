/** @format */

let express = require("express");
let app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome home page");
});

app.get("/home", (req, res) => {
  res.send("Hello ji happy diwali");
});

app.get("/about", (req, res) => {
  res.send("This is about page here");
});

app.post("/posts", (req, res) => {
  res.send("You send a post now ");
});

app.get("/:name/:id/:age", (req, res) => {
  let val = req.params;
  console.log(val);
  res.send("Wellcome to the dynamic page ");
});


app.get('/search', (req, res) => {
  let val = req.query; // yahan 'q' query parameter ko access kar rahe hain
  console.log(val);
  res.send(`Learning query string`);
});
