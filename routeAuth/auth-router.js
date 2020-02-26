const express = require("express");
const bcrypt = require("bcryptjs");

const database = require("./auth-model.js");
const iterations = require("../data/imports/bcryptIterations").bcryptIterations;

const router = express.Router();

router.post("/signup", (req, res) => {

    if (!req.body || !req.body.username || !req.body.password)
        { res.status(400).json({message: "Username and password are both required."}) }
    else
        {
            let hashedPassword = bcrypt.hashSync(req.body.password, iterations);
            req.body.password = hashedPassword;

            database.addUser(req.body)
                .then(idOfAddedUser =>
                    res.status(201).json({message: "Created account for " + req.body.username})
                )
                .catch(({stack, message}) =>
                    res.status(500).json({error: "Could not create user:", stack, message})
                )
        }
})

module.exports = router;