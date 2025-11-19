const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use((req, res, next) => {
  req.timestamp = new Date().toLocaleString();
  console.log("Middleware is active");
  console.log(req.url, req.method, req.timestamp);
  next();
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    message: "Bhai, ye route exist nahi karta ",
    error: error.message,
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
