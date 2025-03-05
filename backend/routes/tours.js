import express from 'express';
import { createTour, deleteTour, getAllTours, getFeaturedTour, getSingleTour, getTourBySearch, updateTour,getTourCount } from '../controllers/tourController.js';
import { verifyAdmin } from '../Utils/verifyToken.js';
const router = express.Router();

//create New Tour
router.post('/createTour',verifyAdmin,createTour);
//Update Existing Tour
router.put('/:id',verifyAdmin,updateTour);
//delete Tour
router.delete('/:id',verifyAdmin,deleteTour);
//getSingle Tour
router.get('/getSingleTour/:id',getSingleTour);
//getAllTour Tour
router.get('/getAllTour',getAllTours);
//getTourBySearch
router.get('/search/getTourBySearch',getTourBySearch);
//getFeaturedTour
router.get('/search/getFeaturedTour',getFeaturedTour);
//getTourCount
router.get('/search/getTourCount',getTourCount);



export default router;