import mongoose from 'mongoose';

export let connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/backend");
    console.log("✅ Connection to MongoDB is successfully established!");
  } catch (error) {
    console.log("❌ Connection to MongoDB failed:", error);
  }
};
