import express from "express";
import cors from "cors";
import cokkieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_URI,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cokkieParser());

export default app;
