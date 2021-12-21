
const users = require("../controllers/user.controller.js");

let router = require("express").Router();

// Create a new user
router.post("/create", users.createUser);

// Retrieve all users
router.get("/all", users.fetchAllUsers);

// Retrieve a single user with id
router.get("/find/:id", users.find);

// Update a user with id
router.put("/update/:id", users.update);

// Delete a user with id
router.delete("/del/:id", users.delete);

// Delete all users
router.delete("/delAll", users.deleteAll);

module.exports = router;