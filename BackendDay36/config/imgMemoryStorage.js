const multer = require("multer");
const storage = multer.memoryStorage()
const uploadMenory = multer({ storage });
module.exports = uploadMenory