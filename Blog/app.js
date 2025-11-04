/** @format */

import express from "express";
const app = express();
const port = 3000;
import { blogs } from "./data.js";

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // console.log(data);
  res.send("Hello World!");
});
app.post("/add-post", (req, res) => {
  const val = req.body; // ✅ define it first
  console.log("New Post Received:", val);

  const newBlog = {
    id: parseInt(val.id),
    title: val.title,
    author: val.author,
    date: val.date,
    tags: val.tags.split(",").map(t => t.trim()),
    content: val.content
  };

  blogs.push(newBlog); // ✅ save data

  // ✅ redirect after saving
  res.redirect("/");
});


app.get("/view-post", (req, res) => {
  res.render("viewPost", { blogs });
});


app.get("/view-post/:id", (req, res) => {
  const { id } = req.params;
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return res.status(404).send("Post not found 😢");
  }

  res.render("showPost", { blog });
});

app.get("/update-post/:id", (req, res) => {
  let { id } = req.params;
  console.log("🔥 ID Received:", id);
  res.send(`ID is: ${id}`);
});


app.get("/delete-post/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);

  res.send("Delete post");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
