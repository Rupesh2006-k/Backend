const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Home page
app.get("/", (req, res) => {
  res.send("This is the home page");
});

// Search user by id
app.get("/search/:id", (req, res) => {
  const users = require("./data.json"); // load JSON
  const { id } = req.params;

  // Make sure id is a number and exists
  const index = parseInt(id);
  if (index >= 0 && index < users.length) {
    const user = users[index];
    res.render("instagram", { user });
  } else {
    res.send("User not found");
  }
});
