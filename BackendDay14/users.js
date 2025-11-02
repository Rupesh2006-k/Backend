let mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/naamdo")

let userSchema = mongoose.Schema({
    userName:String,
    name:String,
    age:Number
})

// mongoose.model(naam , Schema)

module.exports = mongoose.model("users", userSchema)