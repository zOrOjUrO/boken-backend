/*

create a new User: create(object)
find a User by id: findByPk(id)
get all Users: findAll()
update a User by id: update(data, where: { id: id })
remove a User: destroy(where: { id: id })
remove all Users: destroy(where: {})
find all Users by title: findAll({ where: { name: ... } })

*/

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.createUser = (req, res) => {
    // Validate request
    if (!req.body.FirstName || !req.body.Email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create the User
    const user = {
        FirstName: req.body.FirstName,
        MidName: req.body.MidName,
        LastName: req.body.LastName,
        Phn: req.body.Phn,
        Phn: req.body.Phn,
        Married: req.body.Married,
        Email: req.body.Email,
        Gender: req.body.Gender,
        DocumentID: req.body.DocumentID,
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating the User."
            });
        });
};

// Retrieve all Users from the database.
exports.fetchAllUsers = (req, res) => {
    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while retrieving users."
            })
        })
};

// Find a single User with an id
exports.find = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving User with id = ${id}`
            });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Updating User with id = ${id}`
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Encountered while Deleting User with id = ${id}`
            });
        });
};

//WARNING: NOT TO BE USED
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while deleting all Users."
            });
        });
};
