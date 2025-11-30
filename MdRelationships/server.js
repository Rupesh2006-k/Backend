/** @format */

const express = require("express");
const app = express();
const port = 3000;
let connectDB = require("./config/db");
connectDB();
let UserModel = require("./models/user.model");
let orderModel = require("./models/order.model");
let customerModel = require("./models/customer.model");
let postsModel = require("./models/posts.model");
let userpostsModel = require("./models/userpost.model");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let user = await UserModel.create({
    userName: "ashwin",
    addresses: [
      {
        location: "MP",
        city: "ahemdabad",
      },
      {
        location: "MP",
        city: "chani",
      },
    ],
  });
  console.log(user);
  res.send(user);
});

app.get("/order", async (req, res) => {
  let user = await orderModel.create([
    {
      item: "banana",
      price: 40,
    },
    {
      item: "orange",
      price: 60,
    },
    {
      item: "apple",
      price: 50,
    },
  ]);
  console.log(user);
  res.send(user);
});

app.get("/customer", async (req, res) => {
  let cust = await customerModel.create({
    name: "Ashwin bhai",
  });

  let order1 = await orderModel.findOne({ item: "orange" });
  let order2 = await orderModel.findOne({ item: "apple" });

  cust.orders.push(order1);
  cust.orders.push(order2);

  let result = await cust.save();
  console.log(result);
  res.send(result);
});

app.get("/user", async (req, res) => {
  let user = await userpostsModel.create({
    username: "adheesh",
    email: "adheesh@r.com",
  });
  res.send(user);
});

app.get("/post", async (req, res) => {
  let post = await postsModel.create({
    content: "hello mere pyare mitro by aryan bhaiya",
    likes: 25,
  });

  let finduser = await userpostsModel.findOne({ email: "r@r.com" });

  post.user.push(finduser);

  await post.save();
  res.send(post);
});

app.get("/readpost", async (req, res) => {
  let post = await postsModel.findOne({}).populate("user" , 'username');
  console.log(post);
  res.send(post);
});

app.get("/read", async (req, res) => {
  let result = await customerModel.find({}).populate("orders");
  console.log(result[0]);
  res.send(result);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
