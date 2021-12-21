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
const document = db.documents;
const Op = db.Sequelize.Op;

// Create and Save a new doc
exports.createDoc = (req, res) => {
    // Validate request
    if (!req.body.AadharUUID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create the doc
    const doc = {
        AadharUUID: req.body.AadharUUID
    };

    // Save doc in the database
    document.create(doc)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating the doc."
            });
        });
};

// Find a single doc with an id
exports.find = (req, res) => {
    const id = req.params.id;
    document.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find doc with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving doc with id = ${id}`
            });
        });
};

// Update a doc by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    document.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Doc was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Doc with id=${id}. Maybe Doc was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Updating Doc with id = ${id}`
            });
        });
};

// Delete a doc with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    document.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Doc was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Doc with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error Encountered while Deleting Doc with id = ${id}`
            });
        });
};

//WARNING: NOT TO BE USED
// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    document.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Documents were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while deleting all UDocuments."
            });
        });
};
