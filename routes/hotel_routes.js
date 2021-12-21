const hotel = require("../controllers/hotel_controller");

let router = require("express").Router();

// get hotels 
router.get("/find/:query", hotel.getNearbyHotels);

// get hotel details by id 
router.get("/get/:id", hotel.getNearbyHotels);

module.exports = router;