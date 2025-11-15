/** @format */
let methodOverride = require('method-override')
const express = require("express");
const path = require("path");
let posts = require("./public/javascripts/postData");
const app = express();
let { v4: uuidv4 } = require("uuid");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'))
app.get("/posts", (req, res) => {
  res.render("index", { post: posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const post = {
    id: uuidv4(),
    username: req.body.username,
    content: req.body.content,
  };
  posts.push(post);
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let postData = posts.find((post) => id === post.id);
  console.log(postData);
  res.render("show", { postData });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const newContent = req.body.content;
  const postData = posts.find((post) => post.id === id);
  if (!postData) {
    return res.status(404).send("Post not found");
  }
  postData.content = newContent;
  console.log("Updated Content:", newContent);
  console.log("Updated Post:", postData);
  // res.send('postData'); // return updated post
  res.redirect('/posts'); // return updated post
});


app.get("/posts/:id/edit", (req, res) => {
   const { id } = req.params;
   const postData = posts.find((post) => post.id === id);
  res.render("edit" , {postData});
});

app.delete("/posts/:id", (req, res) => {
   const { id } = req.params;
   posts = posts.filter((post) => id !== post.id);
  res.redirect('/posts');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
