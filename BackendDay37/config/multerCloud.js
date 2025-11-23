const multer = require("multer");
let a = require('cloudinary')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "myUploads", // Cloudinary me folder name
    allowed_formats: ["jpg", "png", "jpeg", "webp"]
  },
});

const upload = multer({ storage });

module.exports = upload;