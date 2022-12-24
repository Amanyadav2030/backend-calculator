const express = require("express");
const {UserModel} = require('../models/index.js')
const UserRouter = express.Router();


UserRouter.post("/signup", async (req, res) => {
    const { email } = req.body;
    try {
        let user = await UserModel.findOne({ email })
        if (user) {
            return res.status(401).send("This email is already in use please change the email and try to signup")
        }
        let newUser = await UserModel.create(req.body)
        res.send({
            newUser,
            msg:"Successfully created"
        })
    } catch (er) {
        res.status(500).send(er.message)
    }
})

UserRouter.get("/", (req, res) => {
    res.send("Continue Login")
})
UserRouter.post("/login", async (req, res) => {
    console.log(req.body);
    try {
        let user = await UserModel.findOne({ email: req.body.email, password: req.body.password })
        if (!user) {
            return res.status(400).send("Authentication failed")
        }
        res.send({ token: `${user.id}:${user.email}:${user.password}` })
    } catch (er) {
        res.status(500).send(er.message);
    }
})

module.exports = UserRouter;