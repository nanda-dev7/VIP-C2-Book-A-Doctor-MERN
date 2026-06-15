import Doctor from "../models/Doctor.js";

export const getAllDoctorsController = async (
  req,
  res
) => {
  try {
    const doctors = await Doctor.find({});

    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      success: false,
      message: "Failed to fetch doctors",
    });
  }
};