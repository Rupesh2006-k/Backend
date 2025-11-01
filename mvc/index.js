/** @format */

let data = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 24,
    experience: "2 years",
  },
  {
    id: 2,
    name: "Riya Patel",
    age: 27,
    experience: "4 years",
  },
  {
    id: 3,
    name: "Kabir Singh",
    age: 22,
    experience: "1 year",
  },
  {
    id: 4,
    name: "Ananya Mehta",
    age: 29,
    experience: "5 years",
  },
  {
    id: 5,
    name: "Dev Verma",
    age: 26,
    experience: "3 years",
  },
];

import express from "express";
const app = express();
const port = 3000;

app.get("/user/:id", (req, res) => {
  let { id } = req.params;
  res.send(`
        <h1>  Name : ${data[id].name }</h1>
        <h1> Age :  ${data[id].age} </h1>
        <h1> Experience :  ${data[id].experience} </h1>
        `);
  console.log(data[id].name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
