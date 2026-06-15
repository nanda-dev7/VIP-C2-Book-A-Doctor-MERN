import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  applyDoctorController,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post(
  "/apply-doctor",
  authMiddleware,
  applyDoctorController
);

export default router;