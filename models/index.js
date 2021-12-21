const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

let sequelize
if(dbConfig.URL)
  sequelize = new Sequelize(dbConfig.URL);
else
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./pg/user.model.js")(sequelize, Sequelize);
db.guides = require("./pg/guide.model.js")(sequelize, Sequelize);
db.documents = require("./pg/document.model.js")(sequelize, Sequelize);

db.cities = require('./mongo/cities');
db.cities = require('./mongo/trip');

module.exports = db;