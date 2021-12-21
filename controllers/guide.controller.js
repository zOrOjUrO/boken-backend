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
const Guide = db.guides;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.createGuide = (req, res) => {
    // Validate request
    if (!req.body.FirstName || !req.body.Email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create the Guide
    const guide = {
        FirstName: req.body.FirstName,
        MidName: req.body.MidName,
        LastName: req.body.LastName,
        Phn: req.body.Phn,
        Email: req.body.Email,
        Gender: req.body.Gender,
        DocumentID: req.body.DocumentID,
    };

    // Save Guide in the database
    Guide.create(guide)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating the Guide."
            });
        });
};

// Retrieve all Guides from the database.
exports.fetchAllGuides = (req, res) => {
    Guide.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while retrieving guides."
            })
        })
};

// Find a single guide with an id
exports.find = (req, res) => {
    const id = req.params.id;
    Guide.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Guide with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving Guide with id = ${id}`
            });
        });
};

// Update a Guide by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Guide.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Guide was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Guide with id=${id}. Maybe Guide was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Updating Guide with id = ${id}`
            });
        });
};

// Delete a Guide with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Guide.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Guide was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Guide with id=${id}. Maybe Guide was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Encountered while Deleting Guide with id = ${id}`
            });
        });
};

//WARNING: NOT TO BE USED
// Delete all Guides from the database.
exports.deleteAll = (req, res) => {
    Guide.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Guides were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while deleting all Guides."
            });
        });
};
