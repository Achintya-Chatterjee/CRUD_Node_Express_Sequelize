module.exports = function (app) {
  const customers = require("../controller/customer.controller");

  //create a new customer
  app.post("/api/customers", customers.create);

  //Retrive all customes
  app.get("/api/customers", customers.findAll);

  //retrive a single customer by its id
  app.get("/api/customers/:customerId", customers.findById);

  //update a customer by id
  app.put("/api/customers/:customersId", customers.update);

  //delete a customer by id

  app.delete("/api/customers/:customersId", customers.delete);
};
