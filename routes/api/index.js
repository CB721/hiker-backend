const path = require("path");
const router = require("express").Router();
const hikes = require("./hikes");

router.use("/hikes", hikes);
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;