const  mongoose  = require("mongoose");

let studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    course:String
})

let studentModel = mongoose.model('student' , studentSchema)
module.exports = studentModel