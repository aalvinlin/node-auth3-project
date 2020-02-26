const express = require("express");
const bcrypt = require("bcryptjs");

const database = require("./auth-model.js");

const router = express.Router();

router.post("/signup", (req, res) => {

    if (!req.body || !req.body.username || !req.body.password)
        { res.status(400).json({message: "Username and password are both required."}) }
    else
        {
            let hashedPassword = bcrypt.hashSync(req.body.password, 8);
            req.body.password = hashedPassword;

            database.addUser(req.body)
                .then(usersAdded =>
                    res.status(201).json({message: "Created " + usersAdded + " account for " + req.body.username})
                )
                .catch(({stack, message}) =>
                    res.status(500).json({error: "Could not create user:", stack, message})
                )

            res.status(200).json({message: "Will be logged in shortly."})
        }
})

module.exports = router;