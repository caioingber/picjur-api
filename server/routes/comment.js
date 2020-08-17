const express = require("express");
const router = express.Router();
const controller = require("../controllers/comment");

router.get("/", controller.getComments);
router.get("/:id", controller.getCommentById);
router.post("/", controller.addComment);
router.delete("/", controller.deleteComment);

module.exports = router;
