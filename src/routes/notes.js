const express = require("express");
const router = express.Router();

const controller = require("../controller/notesController");

router.get("/create",controller.show);

router.post("/create",controller.new);

router.get("/delete",controller.delete)

router.get("/update",controller.old);

router.post("/update",controller.update);

module.exports = router;