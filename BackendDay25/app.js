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
    res.render("index", { files: files });
  });
});

app.get("/file/:fileName", (req, res) => {
  fs.readFile(`./files/${req.params.fileName}`, "utf-8", (err, fileData) => {
    res.render("show", {
      fileData: fileData,
      fileName: req.params.fileName,
    });
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

app.get("/edit/:fileName", (req, res) => {
  res.render("edit", { fileName: req.params.fileName });
});
app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    },
  );
});

app.get("/delete/:fileName", (req, res) => {
  fs.unlink(`./files/${req.params.fileName}`, (err) => {
    res.redirect("/");
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
