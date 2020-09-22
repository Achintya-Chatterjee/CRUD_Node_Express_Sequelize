const db = require("../config/db.config");
const Customer = db.customers;

//post a customer

exports.create = (req, res) => {
  //save to MySQL database
  Customer.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
  }).then((customer) => {
    //send created customer to client
    res.send(customer);
  });
};

//fetch all customers

exports.findAll = (req, res) => {
  Customer.findAll().then((customers) => {
    //send all customers to client
    res.send(customers);
  });
};

//find a customer by id

exports.findById = (req, res) => {
  Customer.findById(req.params.customerId).then((customer) => {
    res.send(customer);
  });
};

//update a customer

exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
    },
    { where: { id: req.params.customerId } }
  ).then(() => {
    res.status(200).send(`updated succesfully with a customer id = ${id}`);
  });
};

//delete a customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send(`Deleted succesfully a customer with id = ${id}`);
  });
};
