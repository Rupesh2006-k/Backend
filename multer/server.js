const express = require("express");
const app = express();
const port = 3000;

let multer = require("multer");
let crypto = require("crypto");
let path = require("path");
app.set("view engine", "ejs");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      let fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});


const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
