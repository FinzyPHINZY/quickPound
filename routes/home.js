const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const postController = require("../controllers/postController");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Note = require("../models/Post");

// router.get("/", homeController.getIndex);

// const Story = require('../models/Story')

// @desc    Login/Landing page
// @route   GET /
router.get("/", ensureGuest, homeController.getLogin);

// @desc    Homepage
// @route   GET /index
router.get("/index", ensureAuth, homeController.getHome);

// @desc    Homepage
// @route   GET /post/profile
router.get("/profile", ensureAuth, postController.getProfile);

module.exports = router;
