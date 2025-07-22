import express from "express";
import {
  getAll,
  create,
  update,
  deleteQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteQuiz);

export default router;
