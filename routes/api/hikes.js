const router = require("express").Router();
const controller = require("../../controllers/hikeController");

router
    .route("/:location/:miles/:difficulty")
    .get(controller.getHike);

module.exports = router;