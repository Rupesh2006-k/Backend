/** @format */

const express = require("express");
const app = express();
const port = 3000;

// application level middleware
app.use((req, res, next) => {
  console.log("this is application level middlware 2  ");
  return next();
});

// error handling

app.use((err , req ,res , next)=>{
  console.log("----- ERROR ----")
})

// specific route based middleware
app.use("/random", (req, res, next) => {
  let date = new Date(Date.now());
  console.log(req.method, req.hostname, req.path, date);
  return next();
});

let check =
  ("/api",
  (req, res, next) => {
    let { token } = req.query;
    if (token === "hey") {
      return next();
    } else res.send("Access denied");
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


// 4o4 page middleware
// app.use((req, res, next) => {
//   res.send("404");
//   return next();
// });





app.listen(port, () => console.log(`Example app listening on port ${port}!`));
