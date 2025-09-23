import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
  });
