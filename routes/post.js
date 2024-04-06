const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const upload = require("../middleware/multer");
const postController = require("../controllers/postController");
const Post = require("../models/Post");

// @desc         Show all notes
// @route        GET /notes
router.get("/", ensureAuth, postController.getFeed);

// // @desc         Show add page
// // @route        GET /notes/add
// router.get("/add", ensureAuth, postController.showAdd);

// // @desc         Process add form
// // @route        POST /post/createPost
router.post("/createPost", upload.single("file"), postController.createPost);

// @desc         Show single post
// @route        GET /post/:id
router.get("/:id", ensureAuth, postController.getPost);

// @desc         like post
// @route        GET /post/edit/:id
router.put("/likePost/:id", postController.likePost);

// @desc        Delete Note
// @route        Delete /notes/:id
router.delete("/deletePost/:id", postController.deletePost);
module.exports = router;
