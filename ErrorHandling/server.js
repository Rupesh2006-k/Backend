/** @format */

const express = require("express");
const app = express();
const port = 3000;
let ExpressError = require("./utils/ExpressError");

app.get("/", (req, res) => res.send("Hello World!"));

app.use((req, res, next) => {
  console.log("App-level middleware chala!");
  next();
});

app.get("/err", (req, res) => {
  console.log("check");
  a = a;
});

const check = (req, res, next) => {
  console.log("this is route based middleware");
  next();
};

app.get("/router", check, (req, res) => {
  res.send("hey router");
});

app.get("/random", (req, res) => {
  res.send("hey random");
});

app.use(function (req, res, next) {
  console.log("---- ERROR -----");
  next();
});

app.use(function (err, req, res, next) {
  console.log("---- ERROR 2  -----");
  next(err);
});
app.use(function (err, req, res, next) {
  console.log("---- ERROR 3  -----");
  //   next(err);
  res.status(401).json({ error: "error hai" });
  //   throw new ExpressError(401, "sorry ");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
