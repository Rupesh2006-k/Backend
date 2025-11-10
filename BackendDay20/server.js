/** @format */

const express = require("express");
const app = express();
const port = 3000;
let dataModel = require("./index");
app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/", async (req, res) => {
  let data = await dataModel.create([
    { name: "Aman", age: 22, marks: 85, city: "Delhi" },
    { name: "Riya", age: 25, marks: 92, city: "Mumbai" },
    { name: "Karan", age: 20, marks: 76, city: "Delhi" },
    { name: "Neha", age: 23, marks: 64, city: "Pune" },
    { name: "Rohit", age: 21, marks: 90, city: "Chennai" },
  ]);
  res.send(data);
});

// router.get("/find", async (req, res) => {
//   let regex = new RegExp("^parth$", "i");
//   let finded = await userModel.find({ username: regex });
//   res.send(finded);
// });

// greater than

// app.get("/find", async (req, res) => {
//   let finder = await dataModel.find({ marks: { $gt: 85 } });
//   console.log(finder);
//   res.send(finder);
// });

//  greater than equal to

// app.get("/find", async (req, res) => {
//   let finder = await dataModel.find({ marks: { $gte: 85 } });
//   console.log(finder);
//   res.send(finder);
// });

// less than

// app.get("/less", async (req, res) => {
//   let finder = await dataModel.find({ marks: { $lt: 80 } });
//   res.send(finder);
//   console.log(finder);
// });

// less than equal to

// app.get("/lessthan", async (req, res) => {
//   let finder = await dataModel.find({ marks: { $lte: 90 } });
//   console.log(finder);
//   res.send(finder);
// });

// app.get("/inop", async (req, res) => {
//   let finder = await dataModel.find({ city: { $in: ["Delhi", "Mumbai"] } });
//   res.send(finder);
//   console.log(finder);
// });

// app.get("/inop", async (req, res) => {
//   let delhi = new RegExp("^delhi$", "i");
//   let mumbai = new RegExp("^mUmbai$", "i");
//   let finder = await dataModel.find({ city: { $in: [delhi, mumbai] } });
//   res.send(finder);
//   console.log(finder);
// });

// app.get('/or' , async (req ,res)=>{
//   let finder = await dataModel.find({$or :[{marks : {$gte :95}} , {city : "Delhi"}]})
//   console.log(finder);
//   res.send(finder)
// })

app.get("/updateone", async (req, res) => {
  let result = await dataModel.updateOne(
    { name: "Aman" }, // filter
    { $set: { marks: 100 } }, // update
  );

  res.send(result); // result will show matchedCount & modifiedCount
  console.log(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
