import express from "express";
import notesRouter from "./routes/notes_routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware
app.use(express.json());  // To parse JSON request bodies

// Simple Custom Middleware
// app.use((req, res, next) => {
//   console.log("Request Method:", req.method, "Request URL:", req.url);
//   next();
// });

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
