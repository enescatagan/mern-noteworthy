import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("You got 10 notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note Updated" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note Deleted" });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
