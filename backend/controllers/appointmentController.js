import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";
import User from "../models/User.js";

export const bookAppointmentController = async (
  req,
  res
) => {
  try {
    const appointment = new Appointment({
      ...req.body,
      userId: req.user.id,
      status: "pending",
    });

    await appointment.save();

    // Get Doctor
    const doctor = await Doctor.findById(
      req.body.doctorId
    );

    // Get Doctor User Account
    const doctorUser = await User.findById(
      doctor.userId
    );

    doctorUser.notifications.push({
      type: "new-appointment-request",
      message: "You have a new appointment request",
      onClickPath: "/doctor/appointments",
    });

    await doctorUser.save();

    res.status(201).send({
      success: true,
      message:
        "Appointment booked successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Failed to book appointment",
    });
  }
};



export const getDoctorAppointmentsController =
  async (req, res) => {
    try {
      const doctor = await Doctor.findOne({
        userId: req.user.id,
      });

      if (!doctor) {
        return res.status(404).send({
          success: false,
          message: "Doctor not found",
        });
      }

      const appointments =
        await Appointment.find({
          doctorId: doctor._id,
        });

      res.status(200).send({
        success: true,
        appointments,
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        success: false,
        message:
          "Failed to fetch appointments",
      });
    }
  };


  export const updateAppointmentStatusController =
  async (req, res) => {
    try {
      const { appointmentId, status } =
        req.body;

      const appointment =
        await Appointment.findByIdAndUpdate(
          appointmentId,
          { status },
          { new: true }
        );

      const user = await User.findById(
        appointment.userId
      );

      user.notifications.push({
        type: "appointment-status-updated",
        message: `Your appointment has been ${status}`,
        onClickPath: "/appointments",
      });

      await user.save();

      res.status(200).send({
        success: true,
        message:
          "Appointment status updated",
      });
    } catch (error) {
      console.log(error);

      res.status(500).send({
        success: false,
        message:
          "Failed to update appointment",
      });
    }
  };