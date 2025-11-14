let mongoose = require('mongoose')

let testSchema = mongoose.Schema({
    name:String ,
    age:Number,
    email:String
})

let testModel = mongoose.model('test' , testSchema);

module.exports = testModel