//model
const model = require("../models/users.model");

function getUsers(req, res) {
    res.send(model.users);
}

function getUser(req, res) {
    const userId = parseInt(req.params.id);
    const user = model.users[userId];
    if (user) {
        res.send(user);
    } else {
        res.sendStatus(404);
    }
}

function postUser(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "missing user name"
        })
    }
    const newUser = {
        name: req.body.name,
        id: model.users.length
    }
    model.users.push(newUser);
    res.json(newUser);
}

module.exports = {
    getUser,
    getUsers,
    postUser
}