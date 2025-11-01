/** @format */

const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("New URL is hit:", req.url);

  if (req.url === "/") {
    const filePath = path.join(__dirname, "views", "index.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("💥 Error loading file");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/profile") {
    let filePath = path.join(__dirname, "views", "profile.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This profile page here");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    let filePath = path.join(__dirname, "views", "about.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This about page here");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    let filePath = path.join(__dirname, "views", "contact.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This contact page here");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found 😢");
  }
});

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
