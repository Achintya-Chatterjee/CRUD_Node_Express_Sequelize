const env = require("./env");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.uasername, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models/tables

db.customers = require("../model/customer.model")(Sequelize, sequelize);

module.exports = db();
