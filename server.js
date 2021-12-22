const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//enable cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// let corsOptions = {
//     origin: "http://localhost:4040/",
// };

const db = require("./models");
db.sequelize.sync();


// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//mongodb connection
const mongoose = require('mongoose');
require('dotenv').config({path: '.env'});

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise; //ES6 promises
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error -> ${err.message}`);
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Konnichiwa ^_^" });
});

require("./routes/index.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
