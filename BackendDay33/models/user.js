let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userName:String,
    email:String,
    age:Number,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
})

module.exports = mongoose.model('user' , userSchema)