import express from 'express';
import { createBooking, getAllBookingDetails, getBookingDetails } from '../controllers/bookingController.js';
import { verifyUser,verifyAdmin } from '../utils/verifyToken.js';
const router= express.Router();

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBookingDetails)
router.get('/',verifyAdmin,getAllBookingDetails)

export default router;