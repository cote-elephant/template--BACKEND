import mongoose from "mongoose";

export async function connectToDB(url){
     try {
      await mongoose.connect(url)
      console.log("Connected to MongoDB ✅");
    } catch (error) {
      console.error("Failed to connect to MongoDB ⛔ ", error);
      process.exit(1);
    }
}