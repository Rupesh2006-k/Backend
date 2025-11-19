/** @format */

const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 3000;
let jwt = require("jsonwebtoken");
app.use(cookieParser());
app.get("/", (req, res) => {
  
    let token = jwt.sign({ emial: "k@k.com" },"secretCode",{issuer :"RupeshServer"} , {audience :"frontendDev"});
  res.cookie('token' , token)
  res.send(token);

});


app.get("/check", (req, res) => {
  try {
    let hash = req.cookies.token;
    let ans = jwt.verify(hash, "secretCode");

    console.log(ans, req.url);
    return res.send("welcome");
  } catch (err) {
    return res.send("ghar jaake pogo dekho balak");
  }
});


app.get('/decode' , (req , res)=>{
    let token  = req.cookies.token
    console.log(jwt.decode(token));
    res.send(jwt.decode(token))
})

app.get('/del' , (req ,res)=>{
    res.clearCookie('token')
    // res.send('delete')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
