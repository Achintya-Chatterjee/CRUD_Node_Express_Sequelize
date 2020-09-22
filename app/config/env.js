const env = {
  database: "testdb",
  uasername: "root",
  password: "7872386160",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
