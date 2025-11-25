/** @format */

const express = require("express");
const app = express();
const port = 3000;
let connectDB = require("./config/db");
connectDB();
let Model = require("./models/product.model");
let UserModel = require("./models/user.model");
// app.get("/", async (req, res) => {
//   let ans = await UserModel.insertMany([
//     {
//       name: "Rupesh",
//       age: 22,
//       city: "Delhi",
//       email: "rupesh@example.com",
//       rating: 4.5,
//       marks: 88,
//       amount: 1200,
//     },
//     {
//       name: "Aman",
//       age: 25,
//       city: "Mumbai",
//       email: "aman123@gmail.com",
//       rating: 3.9,
//       marks: 76,
//       amount: 800,
//     },
//     {
//       name: "Sakshi",
//       age: 20,
//       city: "Pune",
//       email: "sakshi2004@yahoo.com",
//       rating: 4.8,
//       marks: 92,
//       amount: 1600,
//     },
//     {
//       name: "Rahul",
//       age: 28,
//       city: "Bangalore",
//       email: "rahul.dev@gmail.com",
//       rating: 4.2,
//       marks: 81,
//       amount: 950,
//     },
//     {
//       name: "Neha",
//       age: 24,
//       city: "Jaipur",
//       email: "neha24@outlook.com",
//       rating: 3.5,
//       marks: 70,
//       amount: 500,
//     },
//   ]);

//   res.send(ans);
// });

// app.get("/one", async (req, res) => {
//   let a = await UserModel.collection.insertOne({
//     name: "Rupesh kushwaha",
//     age: 27,
//     city: "Delhi or mumbai",
//     email: "rupesh@gmail.com",
//     rating: 5,
//     marks: 98,
//     amount: 12000,
//   });
//   res.send(a);
// });

// app.get("/many", async (req, res) => {
//   let a = await UserModel.collection.insertMany([
//     {
//       name: "RupeshKushwaha",
//       age: 27,
//       city: "Delhi",
//       email: "rupesh@gmasil.com",
//       rating: 5,
//       marks: 98,
//       amount: 12000,
//     },
//     {
//       name: "Amit Sharma",
//       age: 25,
//       city: "Mumbai",
//       email: "amit@gmail.com",
//       rating: 4,
//       marks: 89,
//       amount: 15000,
//     },
//   ]);
//   res.send(a);
// });

// app.get("/findone", async (req, res) => {
//   let ans = await UserModel.collection.findOne({ age: 25 });
//   res.send(ans);
// });
// app.get("/find", async (req, res) => {
//   let ans = await UserModel.find({$or : [ {marks : {$gt:95}},{city:"Delhi"}]});
//   res.send(ans);
// });

// app.get("/find", async (req, res) => {
//   let ans = await UserModel.find({$or : [ {marks : {$gt:95}},{city:"Delhi"}]});
//   res.send(ans);
// });

// app.get("/update", async (req, res) => {
//   let ans = await UserModel.updateOne({marks:98}, {$set: {marks:40} })
//   res.send(ans);
// });
// app.get("/update", async (req, res) => {
//   let ans = await UserModel.updateMany({city :"Delhi"}, {$set: {city:"New Delhi"} })
//   res.send(ans);
// });
// app.get("/replace", async (req, res) => {
//   let ans = await UserModel.replaceOne({name :"RupeshKushwaha"}, {name:"Ashwin" , city:"Bhopal" , marks:82 , age:19 , email:"a@a.com" , amount:"100k" ,rating:5.5})
//   res.send(ans);
// });

app.get("/cr", async (req, res) => {
  try {
    let ans = await Model.create({
      name: "Laptop Pro Max",
      amount: 85000,
      rating: 4.7,
      performance: {
        m: "B",
        q: "A",
      },
      category: ["electronics", "laptop", "premium"],
    });

    res.send(ans);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get("/find", async (req, res) => {
  let find = await Model.find({ "performance.m": "A" });
  res.send(find);
});

// app.get('/del' , async (req ,res)=>{
//   let find = await Model.deleteOne({marks:{$gt:97}})
//   res.send(find)
// })

app.get("/del", async (req, res) => {
  try {
    let result = await UserModel.deleteMany({
      rating:4.5
    });

    console.log(result)
    res.send(result);
  } catch (err) {
    console.log(err)
    res.status(500).send({ error: err.message });
  }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
