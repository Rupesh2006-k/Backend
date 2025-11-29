const express = require("express");
const app = express();
const port = 3000;
let ExpressError = require("./utils/ExpressError");

// --- Application Level Middleware ---
app.use((req, res, next) => {
  console.log("---- Application Level Middleware ----");
  next();
})

// --- Routes ---
app.get("/", (req, res) => {
  res.send("Hello World!");
});

let check = (req, res, next) => {
  console.log("Router level middleware");
  next();
};

app.get("/route", check, (req, res) => {
  res.send("Hello router!");
});

app.get("/err", (req, res) => {
  throw new ExpressError(401, "Manual error thrown!");
});

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

// --- Error Handler ---
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong!" } = err;
  console.log("---- Error Handler Middleware ----");
  res.status(status).json({ msg: message });
});

// --- Server ---
app.listen(port, () => console.log(`Server running on port ${port}`));
