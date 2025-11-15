/** @format */

const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log(`Visited: ${req.method} ${req.url}`);
//   next();
// })

app.use((err, req, res, next) => {
  console.error("Error aaya:", err.message);
  res.status(500).send("Server me kuch gadbad hai");
});

const checkTime = (req, res, next) => {
  console.log("Route-specific middleware chal gaya");
  next();
};

app.get("/dashboard", checkTime, (req, res) => {
  
  res.send("Dashboard page");
});

app.get("/boom", (req, res, next) => {
  next(new Error("Bhai blast ho gaya!"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.post('/psot' , (req ,res)=>{
  res.send("this is post route")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
