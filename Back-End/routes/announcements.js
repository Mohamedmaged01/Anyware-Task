import express from "express";
import { requireAuth } from "../controllers/authController.js";
import {
  getAllAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcementController.js";

const router = express.Router();

router.get("/", requireAuth, getAllAnnouncements);
router.post("/", requireAuth, createAnnouncement);
router.put("/:id", requireAuth, updateAnnouncement);
router.delete("/:id", requireAuth, deleteAnnouncement);

export default router;
