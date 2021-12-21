const flight = require("../controllers/flight_controller");

let router = require("express").Router();

// get cheapest flight
router.get("/fetch/:origin/:destination/:depart_date/:page", flight.fetchCheapestFlight);

// get closest airport details
router.get("/closestAirport", flight.getNearestAirport);

// get airport detials by iata code
router.get("/airport/:iata", flight.getAirportDetails);


module.exports = router;