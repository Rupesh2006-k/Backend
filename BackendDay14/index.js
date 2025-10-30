/** @format */

const express = require("express");
const app = express();
const port = 3000;
let path = require('path')
// parsers
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine' , 'ejs');
// app.set('./views' ,'views')

app.get("/", (req, res) => {
  res.render('index')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
