import express from "express";
import { userData } from "./controller/userControl.js";
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", userData);


app.get('/add/:id',(req, res)=>{
    console.log(req.params.id);
    res.send(`Add user : ${req.params.id}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
