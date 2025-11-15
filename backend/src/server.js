import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRouter from "./routes/notes_routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // To parse JSON request bodies
app.use(rateLimiter);

// Simple Custom Middleware
// app.use((req, res, next) => {
//   console.log("Request Method:", req.method, "Request URL:", req.url);
//   next();
// });

app.use("/api/notes", notesRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on PORT:", PORT);
  });
});
