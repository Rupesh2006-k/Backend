const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Hello world");
});
app.get("/about", (request, response) => {
  response.send("about page here");
});
app.get("/profile", (request, response) => {
  response.send("profile page here ");
});
app.get("/xyz", (request, response) => {
  response.send(" hello xyz page here ");
});
app.get('/ankur' ,(req , res)=>{
    res.send("Hello backend mafia Ankur bhaiya")
})

app.listen(3000);
