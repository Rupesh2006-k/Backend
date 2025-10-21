const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/request", (req, res) => {
  let val = req.query;
  console.log(val);
  res.send(`This is GET request | Name: ${val.name} | Password: ${val.password}`);
});

app.post("/request", (req, res) => {
  let val = req.body;
  console.log(val);
  res.send(`This is POST request | Name: ${val.name} | Password: ${val.password}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
