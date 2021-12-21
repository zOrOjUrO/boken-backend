const axios = require("axios").default;
const apiConf = require('../config/rapi.config');

exports.fetchTrainByNameOrNumber = (req, res) => {
    const query = req.params.query;

    var options = {
        method: 'POST',
        url: 'https://trains.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'trains.p.rapidapi.com',
            'x-rapidapi-key': apiConf.rapidkey
        },
        data: { search: query }
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
