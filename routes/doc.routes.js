
const doc = require("../controllers/document.controller.js");

let router = require("express").Router();

// Create a new user
router.post("/create", doc.createDoc);

router.get("/find/:id", doc.find);

// Update a user with id
router.put("/update/:id", doc.update);

// Delete a user with id
router.delete("/del/:id", doc.delete);

// Delete all users
router.delete("/delAll", doc.deleteAll);

module.exports = router;