import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
