/** @format */

const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config(); // load .env
app.set("view engine", "ejs");

const cloudinary = require("cloudinary").v2; // <-- fixed .v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

// Render the upload form
app.get("/", (req, res) => {
  res.render("index");
});

// Upload route
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  cloudinary.uploader
    .upload_stream(
      { resource_type: "image", folder: "practice" },
      (error, result) => {
        if (error) return res.status(500).send(error.message);
        console.log(result); 
        res.send(`File uploaded successfully. URL: ${result.secure_url}`);
      },
    )
    .end(req.file.buffer);
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}!`));
