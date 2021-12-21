const express = require('express');
const router = express.Router();

//controller for functions
const cityController = require('../controllers/cityController');

//use
router.get('/', cityController.baseRoute);

router.get('/getCities', cityController.getCities);

router.post('/createCity', cityController.createCity);

router.get('/getCity/:cityName', cityController.getCityByName);

router.put('/update/:cityName', cityController.updateCityByName);

router.delete('/delete/:cityName', cityController.deleteCityByName);

module.exports = router;