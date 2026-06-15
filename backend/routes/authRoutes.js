import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  registerController,
  loginController,
  currentUserController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get(
  "/current-user",
  authMiddleware,
  currentUserController
);

export default router;