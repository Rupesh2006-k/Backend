/** @format */

const express = require("express");
const app = express();
const port = 3000;
let methodeOverride = require("method-override");
let ChatModel = require("./models/chat.model");
const connectDB = require("./config/db");

connectDB();

let path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodeOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));

app.get("/chats", async (req, res) => {
  let chat = await ChatModel.find();
  res.render("index", { chat });
});

app.get("/chats/new", async (req, res) => {
  res.render("new");
});

app.post("/chats/new", async (req, res) => {
  let { from, to, msg } = req.body;
  let ans = await ChatModel.create({
    from,
    to,
    msg,
    createdAt: new Date(),
  });
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await ChatModel.findById(id);
  console.log(chat, id);

  res.render("edit", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  console.log(req.body);
  let { msg } = req.body;
  let updatedChat = await ChatModel.findByIdAndUpdate(
    id,
    { msg: msg },
    { runValidators: true, new: true },
  );
  console.log(updatedChat);
  res.redirect("/chats");
});



app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deleteChat = await ChatModel.findByIdAndDelete(id);
  console.log(deleteChat)
  res.redirect("/chats");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
