const mongoose = require("mongoose");
const connectDb= async()=>{
   try {
     const connectedDb  = await mongoose.connect("mongodb://localhost:27017/userDb");
    console.log(`Mongodb connected at ${connectedDb.connection.host}`);
    
   } catch (error) {
      console.log(`Mongodb failed to connect due to ${error.message}`);
      process.exit(1);
   }
}

module.exports=connectDb;