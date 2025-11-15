/** @format */

const express = require("express");
const path = require("path");
const app = express();
let fs = require("fs");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    console.log(files);

    res.render("index", { files: files });
  });
});
app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      res.redirect("/");
    },
  );
});

app.get("/file/:fileName", (req, res) => {
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, fileData) => {
    if (err) {
      return res.status(404).send("File not found 💀");
    }
    res.render("show", {
      fileData: fileData,
      fileName: req.params.fileName,
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
