/** @format */

const express = require("express");
const app = express();
const port = 3000;
let userModel = require("./models/user");
let dbConnection = require("./config/db");
let studentModel = require('./models/student')
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/registure", (req, res) => {
  res.render("registure");
});
// CRUD
// create
app.post("/registure", async (req, res) => {
  let { password, username, email } = req.body;
  let userData = await userModel.create({
    userName: username,
    password: password,
    email: email,
  });
  res.send(userData);
});

// read

// app.get("/getuser", (req, res) => {
//   userModel.find({ userName: "a" }).then((user) => {
//     res.send(user);
//   });
// });

// app.get("/getuser", async (req, res) => {
//   let data = await userModel.find({ email: "rupeshkushwaha03032@gmail.com" });
//   res.send(data);
// });

// update
// app.get('/updated' , async (req ,res)=>{
//   let update = await userModel.findOneAndUpdate({userName:"r"},{email:"rupesh@r.com"})
//   res.send(update)
// })

// delete operation

// app.get("/delete", async (req, res) => {
//   let del = await userModel.findOneAndDelete({userName:"r"})
//   res.send(del)
//  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
