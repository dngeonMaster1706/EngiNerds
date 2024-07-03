import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://kaushik1706:kaushik1706@cluster0.40nh8cv.mongodb.net/next-app-project')
    console.log("DB CONNECTED");
}