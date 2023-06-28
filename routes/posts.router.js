const express = require("express");

//router
const postsRouter = express.Router();

//postsController
const postsController = require("../controllers/posts.controller")

postsRouter.get("/", postsController.getPost);

module.exports = {
    postsRouter
}