import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173" || process.env.CORS_URI,
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
app.use(cookieParser());

//routes
import routes from "./routes/auth.routes.js";

app.use("/api/v1/user/auth", routes);

export default app;
