/** @format */

let http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.end("Home page !holaa");
  } else if (req.url === "/about") {
    res.end("About page herasdfsadfasdfe ❤️");
  } else if (req.url === "/profile") {
    res.end("profile page here 🫡");
  } else {
    res.end("Hello world !  form the ankur bhaiya");
  }
});

server.listen(3000);
