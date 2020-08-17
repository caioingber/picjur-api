const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.addUser);
router.delete("/", controller.deleteUser);

module.exports = router;
