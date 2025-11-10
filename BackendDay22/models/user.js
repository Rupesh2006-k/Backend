let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})

let UseModel = mongoose.model('User' , userSchema);

module.exports = UseModel