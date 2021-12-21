const axios = require("axios").default;
const apiConf = require('../config/rapi.config');

const currency = 'INR';

exports.fetchCheapestFlight = (req, res) => {
    const origin = req.params.origin;
    const destination = req.params.destination;
    const depDate = req.params.depart_date;
    const page = req.params.page;

    const BASEURL = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com';
    const rapidhost = 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com';


    let options = {
        method: 'GET',
        url: BASEURL + '/v1/prices/cheap',
        params: { origin: origin, page: page, currency: currency, destination: destination, depart_date: depDate },
        headers: {
            'x-access-token': apiConf.FLIGHT_API_KEY,
            'x-rapidapi-host': rapidhost,
            'x-rapidapi-key': apiConf.rapidkey
        }
    };


    axios.request(options)
        .then(response => {
            if (response.data.success) {
                res.send(response.data.data[destination]);
            }
            else
                res.send(response.data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while calling API."
            })
        });
};

exports.getNearestAirport = (req, res) => {

    let options = {
        method: 'GET',
        url: 'https://www.travelpayouts.com/whereami',
        params: { locale: 'en', callback: () => {} },
        headers: {
            'x-access-token': apiConf.FLIGHT_API_KEY
        }
    };

    axios.request(options)
        .then(response => {
            if (response.data.success) {
                res.send(response.data.data[destination]);
            }
            else
                res.send(response.data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while calling API."
            })
        });
};

exports.getAirportDetails = (req, res) => {

    const iataCode = req.params.iata;

    let options = {
        method: 'GET',
        url: 'https://airport-info.p.rapidapi.com/airport',
        params: {iata: iataCode},
        headers: {
            'x-rapidapi-host': 'airport-info.p.rapidapi.com',
            'x-rapidapi-key': apiConf.rapidkey
        }
        };

    axios.request(options)
        .then(response => {    
            res.send(response.data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while calling API."
            })
        });
};




