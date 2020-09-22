const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const dbConfig = require("./app/config/db.config");
app.use(bodyParser.json());

//// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});
require("./app/route/customer.route")(app);
//creating a sever

const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
