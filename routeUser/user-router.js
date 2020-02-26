const express = require("express");

const database = require("./user-model.js");

const router = express.Router();

router.get("/", (req, res) => {

    database.getAllUsers()
        .then(users =>
            res.status(200).json(users))
        .catch(({stack, message}) =>
            res.status(200).json({error: "Could not retrieve users:", stack, message}))
})

module.exports = router;