import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],
  semester: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
