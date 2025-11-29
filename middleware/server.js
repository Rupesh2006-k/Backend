/** @format */
let ExpressError = require("./ExpressError");
const express = require("express");
const app = express();
const port = 3000;

// specific route level middleware
let check =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "hey") {
      return next();
    }
    throw new ExpressError(401, "ACCESS DENENID");
  });

app.get("/api", check, (req, res) => {
  res.send("Hello api");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/random", (req, res) => {
  res.send("Hello World! randomw");
});

app.get("/admin", (req, res) => {
throw new ExpressError(403 , "this is forbiden error ")
});

app.get("/err", (req, res) => {
  ab = abcd;
});

app.use((err, req, res, next) => {
  let {status = 500 , message = 'mera msg'} = err
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("----- ERROR 2 ----");
//   res.send(err);
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
