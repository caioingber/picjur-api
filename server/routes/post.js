const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");

router.get("/", controller.getPosts);
router.get("/:id", controller.getPostById);
router.post("/", controller.addPost);
router.delete("/:id", controller.deletePost);

module.exports = router;
