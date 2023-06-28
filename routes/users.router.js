const express = require("express");

//router
const usersRouter = express.Router();

//usersController
const usersController = require("../controllers/users.controller");

usersRouter.get("/", usersController.getUsers);
usersRouter.get("/:id", usersController.getUser);
usersRouter.post("/", usersController.postUser);
module.exports = {
    usersRouter
}