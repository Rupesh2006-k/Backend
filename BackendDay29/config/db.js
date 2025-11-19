let mongoose = require('mongoose')
 const connectDB = async () => {
  try {
    const response = await mongoose.connect("mongodb://127.0.0.1:27017/testApp");
    console.log("MongoDB connected successfully!"); 
    return response;
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error.message);
  }
};

module.exports = connectDB