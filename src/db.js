import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Successful connection to the database.")
    } catch (error) {
        console.log("Error while connecting to the database." + error)
    }
}