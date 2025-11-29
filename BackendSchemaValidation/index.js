/** @format */

const express = require("express");
const app = express();
const port = 3000;

let methodOverride = require("method-override");
let ChatModel = require("./models/chat.model");
const connectDB = require("./config/db");
let ExpressError = require("./config/ExpressError");

let path = require("path");

// Connect DB
connectDB();

// Middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

let asyncWrap = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

/* -------------------- ROUTES -------------------- */

// INDEX
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chat = await ChatModel.find();
    res.render("index", { chat });
  }),
);

// NEW FORM
app.get("/chats/new", (req, res) => {
  res.render("new");
});

// CREATE
app.post("/chats/new", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    await ChatModel.create({
      from,
      to,
      msg,
      createdAt: new Date(),
    });
    res.redirect("/chats");
  } catch (error) {
    next(error);
  }
});

// EDIT FORM
app.get("/chats/:id/edit", async (req, res, next) => {
  try {
    let { id } = req.params;
    let chat = await ChatModel.findById(id);

    if (!chat) throw new ExpressError(404, "Chat not found");

    res.render("edit", { chat });
  } catch (err) {
    next(err);
  }
});

// UPDATE
app.put("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { msg } = req.body;

    await ChatModel.findByIdAndUpdate(
      id,
      { msg },
      { runValidators: true, new: true },
    );

    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// SHOW
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await ChatModel.findById(id);

    if (!chat) throw new ExpressError(404, "Chat not found");

    res.render("show", { chat });
  }),
);

// DELETE
app.delete("/chats/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await ChatModel.findByIdAndDelete(id);
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

/* ----------------- GLOBAL ERROR HANDLER ----------------- */

app.use((err, req, res, next) => {
  let { status = 500, message = "Kuch toh gadbad ho gayi..." } = err;
  res.status(status).send(message);
});

/* --------------------- START SERVER --------------------- */

app.listen(port, () =>
  console.log(`🚀 Server running at http://localhost:${port}`),
);
