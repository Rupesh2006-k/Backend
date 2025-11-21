const express = require('express')
const upload = require('./config/multerConfig')
const productXModel = require('./models/productX')
const connectDB = require('./config/db')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
connectDB()
// Show upload page
app.get('/', (req, res) => {
  res.render('test')
})

app.get('/profile', async (req, res) => {
  try {
    let showimg = await productXModel.findOne({});
    console.log(showimg);
    res.render('profile', { showimg });
  } catch (err) {
    console.log(err);
    res.send("Error loading profile");
  }
});
// Handle file upload
app.post('/upload', upload.single('image'),async (req, res) => {
  console.log()
  let img = await productXModel.create({
    pic:req.file.filename
  })
  res.redirect("/profile")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
