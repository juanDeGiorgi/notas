const express = require("express");
const router = express.Router();

const controller = require("../controller/notesController");

router.get("/create",controller.show);

router.get("/new",controller.new);

router.get("/delete",controller.delete)

router.get("/old",controller.showOld);

router.get("/update",controller.update);

module.exports = router;