/** @format */

const cookieParser = require("cookie-parser");
let express = require("express");
const app = express();
const port = 3000;
app.use(cookieParser());
let bcrypt = require("bcrypt");
// app.get('/' , (req ,res)=>{
//   res.cookie('username' , 'rupesh')
//   res.cookie('age' , '15')
//   res.cookie('email' , 'a@a.com')
//   res.send("done")
// })

// app.get('/read' , (req ,res)=>{
//   console.log(req.cookies);
//   res.send("reading cookies")
// })
// app.get('/del' , (req ,res)=>{
//   res.clearCookie('age')
//   console.log(req.cookies);
//   res.send("reading cookies delete")
// })

// encryption
// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("rupesh@256", salt, function (err, hash) {
//       console.log(hash);
//       res.send(hash);
//     });
//   });
// });

// compare
// app.get("/read", (req, res) => {
//   bcrypt.compare(
//     "rupesh@256",
//     "$2b$10$OL4hRUOaYO./c2i19vbEWeytuaGnXm4TWlvf5LbFyKvgkrnNj5XbS",
//     function (err, result) {
//       console.log(result);
//       if (result) {
//         console.log("Login successful 🔥");
//       } else {
//         console.log("Galat password bro 😭");
//       }
//       res.send("reading ");
//     },
//   );
// });

// let jwt = require('jsonwebtoken');

// app.get('/' ,(req , res)=>{
//  let token = jwt.sign({email:"kavita@gmail.com"} , 'secret')
// console.log(token);
//  res.cookie('token' , token)
//  res.send("done")
// })

// app.get('/read' , (req , res)=>{
// let data = jwt.verify(req.cookies.token , 'secret')
// console.log(data);
//   res.send("clear cookie  ")
// })

let jwt = require("jsonwebtoken");

app.get("/", (req ,res) => {
  let token = jwt.sign({email : "kavita@gmail.com"} , 'secretCode' , {expiresIn :'2m'})
 res.cookie('token' , token)
  res.send('jwt token is creating')
});

app.get("/read", (req ,res) => {
   let data = jwt.verify(req.cookies.token ,'secretCode')
   console.log(req.url);
   console.log(data);
   
   res.send('jwt token is reading')
  });
  
app.get("/ex", (req ,res) => {
   let data = jwt.verify(req.cookies.token ,'secretCode' ,{ algorithms: ["HS256"] })
   console.log(req.url);
   console.log(data);
   
   res.send('jwt token is reading')
  });
  
  
  app.get("/decode", (req ,res) => {
    let data = jwt.decode(req.cookies.token)
    console.log(req.url);
   console.log(data);
   
   res.send('jwt token is decodeing')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
