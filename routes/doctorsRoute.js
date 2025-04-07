import express from 'express';
import Doctor from '../models/doctorModel.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/get-doctor-info-by-user-id', authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: 'Doctor info fetched successfully',
      data: doctor
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error getting doctor info',
      success: false,
      error
    })
  }
});

router.post('/update-doctor-profile', authMiddleware, async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { userId: req.body.userId }, req.body);
    res.status(200).send({
      success: true,
      message: 'Doctor profile updated successfully',
      data: doctor
    });
  } catch (error) {
    res.status(500).send({
      message: 'Error getting doctor info',
      success: false,
      error
    })
  }
});

export default router;