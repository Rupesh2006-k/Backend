
let express = require("express");
let path = require("path");
let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // views folder script.js ke andar hai

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.render("index", { title: "About Page", message: "Hello from EJS!" });
});


app.get('/dynamic' ,(req , res)=>{
    let val = Math.floor(Math.random() * 6 + 1)
    let val2 =  Math.floor(Math.random() * 6 + 1)
   res.render('data.ejs' ,{val , val2})
})

app.get('/agecheck' ,(req , res)=>{
    let age = Math.floor(Math.random() * 20 + 1);
    res.render('data.ejs' ,{age})
})

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
