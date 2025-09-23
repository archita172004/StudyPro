import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const MONGO_URL = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URL}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodb connection error", error);
    process.exit(1);
  }
};

export default connectDB;
