import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import announcementsRouter from "./routes/announcements.js";
import quizzesRouter from "./routes/quizzes.js";

const app = express();
const port = 3001;

mongoose.connect("mongodb://localhost:27017/task");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());

app.use("/api/announcements", announcementsRouter);
app.use("/api/quizzes", quizzesRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
