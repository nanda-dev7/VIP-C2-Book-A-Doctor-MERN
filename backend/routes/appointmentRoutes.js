import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  bookAppointmentController,
  getDoctorAppointmentsController,
  updateAppointmentStatusController,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post(
  "/book-appointment",
  authMiddleware,
  bookAppointmentController
);


router.get(
  "/doctor-appointments",
  authMiddleware,
  getDoctorAppointmentsController
);


router.put(
  "/update-appointment-status",
  authMiddleware,
  updateAppointmentStatusController
);

export default router;