const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const controller = require("../controllers/user");
router.use(parser.json());

router.get("/", controller.getUsers);

module.exports = router;
