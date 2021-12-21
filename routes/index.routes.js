module.exports = app => {
  
    let router = require("express").Router();

    const userroute=require("./user.routes.js");
    const guideroute=require("./guide.routes.js");
    const docroute=require("./doc.routes.js"); 
        
    const cityroute = require('./cityRoutes');
    const triproute = require('./tripRoutes');

    const flightroute = require('./flight_routes');
    const trainroute = require('./train_routes');
    const hotelroute = require('./hotel_routes');
    
    app.use('/mongo/city', cityroute);
    app.use('/mongo/trip', triproute);
    
    app.use('/pg/user', userroute);
    app.use('/pg/guide', guideroute);
    app.use('/pg/doc', docroute);

    app.use('/api/flight', flightroute);
    app.use('/api/train', trainroute);
    app.use('/api/hotel', hotelroute);
  };