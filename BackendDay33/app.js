/** @format */

const express = require("express");
const app = express();
const port = 3000;
let connectDB = require("./config/db");
let userModel = require("./models/user");
let postModel = require("./models/post");
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  try {
    let user = await userModel.create({
      userName: "lolopolo",
      email: "lolopolo@lo.com",
      age: 25,
    });

    res.send(user)
  } catch (error) {
    console.log(error);
  }
});

app.get("/post/create", async (req, res) => {
  try {
    let post = await postModel.create({
      postdata: "hello ji kese ho",
      user: "691ddb95d6e03ee69d7d3a3d",
      age: 25,
    });

    let user = await userModel.findOne({_id : '691ddb95d6e03ee69d7d3a3d'})
    user.posts.push(post._id);
   await user.save()

    res.send({post , user})
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
