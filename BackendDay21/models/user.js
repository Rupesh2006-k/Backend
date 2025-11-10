const  mongoose  = require("mongoose");

let userModel = mongoose.Schema({
    userName:String,
    password:String,
    email:String
})

let userAnkur = mongoose.model('mens' , userModel)
module.exports = userAnkur