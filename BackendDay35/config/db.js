let mongoose = require('mongoose')

let connectDB = async ()=>{
    try {
        let res = mongoose.connect('mongodb://127.0.01:27017/association')
        console.log("Connected");
        
    } catch (error) {
        console.log("faield");
    }
}

module.exports = connectDB