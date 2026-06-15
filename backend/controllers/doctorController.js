import Doctor from "../models/Doctor.js";

export const applyDoctorController = async (
  req,
  res
) => {
  try {
    const doctor = new Doctor({
      ...req.body,
      userId: req.user.id,
    });

    await doctor.save();

    res.status(201).send({
      success: true,
      message: "Doctor application submitted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Failed to submit application",
    });
  }
};