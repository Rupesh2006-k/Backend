/** @format */

const express = require("express");
const app = express();
const port = 3000;
let upload = require("./config/imgMulter");
let path = require("path");
const uploadMenory = require("./config/imgMemoryStorage");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/uploads", uploadMenory.single("image"), (req, res) => {
    const base64 = req.file.buffer.toString("base64");
    res.render("images", { pic: base64 });
});
// app.post("/uploads", uploadMenory.single("image"), (req, res) => {
//     console.log("====================================");
//   console.log(req.file.buffer); // actual image data in RAM
//   //   let pic = req.file.filename;
//   //   console.log(pic);
//   console.log("====================================");
//   //   res.render("images",{ pic });
//   res.send("Uploaded using memory storage!");
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
