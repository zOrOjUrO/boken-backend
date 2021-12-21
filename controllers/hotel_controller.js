const axios = require("axios").default;
const apiConf = require('../config/rapi.config');
const currency = 'INR';

exports.getNearbyHotels = (req, res) => {

    const query = req.params.query;
    var options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: { query: query, locale: 'en_US', currency: currency },
        headers: {
            'x-rapidapi-host': 'hotels4.p.rapidapi.com',
            'x-rapidapi-key': apiConf.rapidkey
        }
    };

    axios.request(options)
        .then(response => {
            hotels = response.data.suggestions.filter( obj => obj.group == "HOTEL_GROUP")[0].entities;
            res.send(hotels);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while calling API."
            })
        });
};

exports.getHotelDetailsByID = (req, res) => {

    const id = req.params.destID;
    var options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
            destinationId: id,
            //   pageNumber: '1',
            //   pageSize: '25',
            //   checkIn: '2022-01-08',
            //   checkOut: '2022-01-15',
            //   adults1: '1',
            sortOrder: 'PRICE',
            locale: 'en_US',
            currency: currency
        },
        headers: {
            'x-rapidapi-host': 'hotels4.p.rapidapi.com',
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

}