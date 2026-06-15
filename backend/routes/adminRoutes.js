import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import {
  getAllDoctorsController,
} from "../controllers/adminController.js";

const router = express.Router();

router.get(
  "/get-all-doctors",
  authMiddleware,
  adminMiddleware,
  getAllDoctorsController
);

export default router;