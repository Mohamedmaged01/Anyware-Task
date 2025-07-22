import express from "express";
import mongoose from "mongoose";


const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/task");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
