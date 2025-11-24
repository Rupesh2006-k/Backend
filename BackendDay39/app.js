const express = require("express");
const app = express();
const port = 3000;
let multer = require("multer");
let cloudinary = require("cloudinary").v2
require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("no file upload");

  cloudinary.uploader
    .upload_stream(
      { resource_type: "image", folder: "kavita" },
      (err, result) => {
        if (err) return res.status(500).send(err.message);

        console.log(result);
        res.send(`file upload successfully : ${result.secure_url}`);
      },
    )
    .end(req.file.buffer);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
