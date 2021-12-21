const guide = require("../controllers/guide.controller.js");

let router = require("express").Router();

// Create a new user
router.post("/create", guide.createGuide);

// Retrieve all guides
router.get("/all", guide.fetchAllGuides);

// Retrieve a single user with id
router.get("/find/:id", guide.find);

// Update a user with id
router.put("/update/:id", guide.update);

// Delete a user with id
router.delete("/del/:id", guide.delete);

// Delete all users
router.delete("/delAll", guide.deleteAll);

module.exports = router;