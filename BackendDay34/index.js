/** @format */

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
let userModel = require("./models/user");
let postModel = require("./models/post");
let bcrypt = require("bcrypt");
const connectDB = require("./config/db");
let jwt = require("jsonwebtoken");
let crypto = require('crypto')

let path = require('path')

app.use(cookieParser());
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
connectDB();
let multer = require('multer')
app.get("/", (req, res) => {
  res.render("index");
});

// multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err , bytes)=>{
      let fn = bytes.toString('hex') + path.extname(file.originalname)
      cb(null, fn)
    })
  }
})

const upload = multer({ storage: storage })

app.get('/test' , (req ,res)=>{
  res.render('test')
})

app.post('/upload' , upload.single('image') , (req ,res)=>{
  console.log('====================================');
  console.log(req.file);
  console.log('====================================');
  res.render('test')
})


















app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLogin, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  console.log(user);
  res.render("profile", { user });
});

app.get("/like/:id", isLogin, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");

  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }

  await post.save();

  res.redirect("/profile");
});

app.post("/post", isLogin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;

  let post = await postModel.create({
    user: user._id,
    content,
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
});

app.post("/register", async (req, res) => {
  let { name, username, email, password, age } = req.body;

  let user = await userModel.findOne({ email });
  if (user) return res.send("user already registerd");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        username,
        email,
        age,
        password: hash,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "secretKey");

      res.cookie("token", token);
      res.send("regesterd");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.send("something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    console.log(result);
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secretKey");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

function isLogin(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "secretKey");
    req.user = data;
    next();
  }
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
