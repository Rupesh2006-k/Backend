/** @format */

const express = require("express");
const app = express();

// ✅ Middleware 1: logs every request
app.use((req, res, next) => {
  console.log("Request received at:", req.url);
  next();
});

// ✅ Route 1
app.get("/", (req, res) => {
  res.send("Hello Ankur Bhaiya — Backend Mafia 🔥");
});

// ✅ Route 2
app.get("/home", (req, res) => {
  res.send("Welcome to Home Page 🏠");
});
app.get("/about", (req, res) => {
  res.send({ name: "Rupesh" , Age:19 , });
});

// ✅ Server start
app.listen(3000, () => {
  console.log("Sir, main start ho gaya hu ⚡ ");
});
