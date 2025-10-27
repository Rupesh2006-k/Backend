const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Route changed to:", req.url);
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/hello", (req, res) => {
  res.send("Hello Rupesh!");
});

app.get("/home", (req, res) => {
  res.send("This is the home page.");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact page.");
});

app.use((req, res) => {
  res.status(404).send("404 Error: Page Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
