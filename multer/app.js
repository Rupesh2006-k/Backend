// let express = require("express");
// let app = express();
// let port = 3000;

// app.set("view engine", "ejs");
// let crypto = require("crypto");
// let multer = require("multer");
// let path = require("path");
// const fs = require("fs");



// let storage = multer.memoryStorage({
//   destination: (req, file, cb) => {
//     return cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     crypto.randomBytes(13, (err, bytes) => {
//       let fileKaName = bytes.toString("hex") + path.extname(file.originalname);
//       return cb(null, fileKaName);
//     });
//   },
// });

// const upload = multer({ storage });

// app.get("/", (req, res) => {
//   res.render("index");
// });



// app.post("/upload", upload.single("image"), (req, res) => {
//     try {
//       if (!req.file) return res.send("File required");
  
//       const fileName = Date.now() + path.extname(req.file.originalname);
//       const filePath = path.join(__dirname, "uploads", fileName);
  
//       fs.writeFileSync(filePath, req.file.buffer);
  
//       res.send("File saved at: " + filePath);
//     } catch (err) {
//       console.log(err);
//       res.status(500).send("Something went wrong");
//     }
//   });


// // app.post("/upload", upload.single("image"), (req, res) => {
// //   console.log(req.file);
// //   res.send("File uploaded successfully");
// // });


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
