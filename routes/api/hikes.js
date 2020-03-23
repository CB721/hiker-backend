const router = require("express").Router();
const controller = require("../../controllers/hikeController");

router
    .route("/")
    .get(controller.getHike);

module.exports = router;