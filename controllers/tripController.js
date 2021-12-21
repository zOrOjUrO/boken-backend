const mongoose = require('mongoose');
const trip = mongoose.model('triplog');

//NOTE : WAS IN THE MIDDLE OF EDITING. HENCE NOT COMPLETE
exports.baseRoute = async (req, res) => {
    res.send('Mongodb Server runnning');
}

exports.getTripLog = async (req, res) => {
    const trips = await trip.find();
    res.json(trips);
}

exports.addTrip = async (req, res) => {
    //new model(JSON).save(callback())
    await new trip(req.body).save( (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "Trip Added.",
                data
            });
        }
    });
}

exports.getTripByID = async (req, res) => {
    let tripID = req.params.id;
    console.log('Fetch Trip by ID: ', tripID);
    //using collection.findOne(Model, callback())
    await trip.findById({_id: tripID}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "Trip Found!",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}

exports.updateTripByID = async (req, res) => {
    let tripID = req.params.id;
    console.log('Update Query for TripID ', tripID);
    //using collection.findOne(Model, callback())
    await city.updateOne({_id: tripID}, {$set : req.body}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "Trip Updated!",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}

exports.deleteTripByID = async (req, res) => {
    let tripID = req.params.id;
    console.log('Read Query for TripID ', tripID);
    //using collection.findOne(Model, callback())
    await city.deleteOne({_id: tripID}, (err, data) => {
        if(err) {
            res.status(500).json({
                message:
                "Something went wrong, please try again in some time."
            });
        }
        else {
            res.status(200).json({
                message: "Trip Deleted.",
                data
            });
        }
    }).clone().catch(function(err){ console.log(err)});
}