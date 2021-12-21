const train = require("../controllers/train_controller");

let router = require("express").Router();

// get train detials
router.post("/find/:query", train.fetchTrainByNameOrNumber);

module.exports = router;