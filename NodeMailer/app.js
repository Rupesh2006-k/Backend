/** @format */

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const sendMail = require("./controllers/sendMail");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS setup
app.set("view engine", "ejs");

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route: Show Form
app.get("/", (req, res) => {
  res.render("index");
});

// Route: Handle Form + Send Email
app.post("/send-email", sendMail);

app.listen(PORT, () => {
  console.log(`🔥 Server running at http://localhost:${PORT}`);
});
