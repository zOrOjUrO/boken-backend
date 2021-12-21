const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//city schema
const tripSchema = new mongoose.Schema({
    source:{type: String},
    destination:{type: String},
    expense:{type: Number},
    duration:{type: String},
    userid:{type: String},
    guideid:{type: String},
    places:[],
}, { collection: 'triplog' });

module.exports = 
    mongoose.model('triplog', tripSchema); 