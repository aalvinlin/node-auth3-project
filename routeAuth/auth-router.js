const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const database = require("./auth-model.js");
const iterations = require("../data/imports/bcryptIterations").bcryptIterations;
const jwtSecret = require("../data/imports/secrets").jwtSecret;

const router = express.Router();

router.post("/signup", (req, res) => {

    if (!req.body || !req.body.username || !req.body.password)
        { res.status(400).json({message: "Username and password are both required."}) }
    else
        {
            let hashedPassword = bcrypt.hashSync(req.body.password, iterations);
            req.body.password = hashedPassword;

            const token = generateToken(req.body);

            database.addUser(req.body)
                .then(idOfAddedUser =>
                    res.status(201).json({message: "Created account for " + req.body.username, token})
                )
                .catch(({stack, message}) =>
                    res.status(500).json({error: "Could not create user:", stack, message})
                )
        }
})

router.post("/login", (req, res) => {

    if (!req.body || !req.body.username || !req.body.password)
        { res.status(400).json({message: "Username and password are both required."}) }
    else
        {
            database.getUser({username: req.body.username})
                .first()
                .then(user => {

                    if (user && bcrypt.compareSync(req.body.password, user.password))
                        {
                            const token = generateToken(req.body);
                            res.status(201).json({message: "Logged in " + req.body.username, token})        
                        }
                    else
                        {
                            res.status(403).json({message: "Invalid credentials."})        
                        }
                    })
                .catch(({stack, message}) =>
                    res.status(500).json({error: "Could not log in user:", stack, message})
                    )
        }
    })

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }

    const options = {
        expiresIn: "2h"
    }

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;