const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//city schema
const citySchema = new mongoose.Schema({
    city:{type: String},
    state:{type: String},
    temp:{type: Number},
    season:{type: String},
    duration:{type: String},
    airport:{type: String},
    attraction:[],
    about:{type: String}
}, { collection: 'majorCity' });

module.exports = 
    mongoose.model('majorCity', citySchema); 