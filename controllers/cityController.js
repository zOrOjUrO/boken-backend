const mongoose = require('mongoose');
const city = mongoose.model('majorCity');

exports.baseRoute = async (req, res) => {
    res.send('Mongodb Server runnning');
}

exports.getCities = async (req, res) => {
    const cities = await city.find();
    res.json(cities);
}

exports.createCity = async (req, res) => {
    //new City(JSON).save(callback())
    await new city(req.body).save( (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "City Created",
                data
            });
        }
    });
}

exports.getCityByName = async (req, res) => {
    let cityName = req.params.cityName.trim();
    console.log('Read Query for', cityName);
    //using collection.findOne(Model, callback())
    await city.findOne({'city': cityName}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "City Found!",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}

//just for CRUD demo
exports.updateCityByName = async (req, res) => {
    let cityName = req.params.cityName.trim();
    console.log('Update Query for', cityName);
    //using collection.findOne(Model, callback())
    await city.updateOne({'city': cityName}, {$set : req.body}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "City Updated!",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}

//just for CRUD demo
exports.deleteCityByName = async (req, res) => {
    let cityName = req.params.cityName.trim();
    console.log('Read Query for', cityName);
    //using collection.findOne(Model, callback())
    await city.deleteOne({'city': cityName}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "City Deleted.",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}