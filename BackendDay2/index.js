let express = require("express");

let app = express();

let path = require("path");

app.listen(3000, () => {
  console.log("App is listenin  on 3000");
});

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.send("This is Home page ");
});

app.get("/demo", (req, res) => {
  res.render("index"); // index.ejs
});
