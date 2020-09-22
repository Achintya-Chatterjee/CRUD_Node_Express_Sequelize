const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const customer = sequelize.define("customer", {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
  });
  return customer;
};
