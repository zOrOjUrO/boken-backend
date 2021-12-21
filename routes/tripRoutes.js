const express = require('express');
const router = express.Router();

//controller for functions
const tripController = require('../controllers/tripController');

//use
router.get('/', tripController.baseRoute);

router.get('/log', tripController.getTripLog);

router.post('/create', tripController.addTrip);

router.get('/find/:tripId', tripController.getTripByID);

router.put('/update/:tripId', tripController.updateTripByID);

router.delete('/delete/:tripId', tripController.deleteTripByID);

module.exports = router;