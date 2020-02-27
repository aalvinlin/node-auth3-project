const express = require("express");

const database = require("./user-model.js");
const restrictedView = require("./restricted-view");

const router = express.Router();

router.get("/all", (req, res) => {

    database.getAllUsers()
        .then(users =>
            res.status(200).json(users))
        .catch(({stack, message}) =>
            res.status(200).json({error: "Could not retrieve users:", stack, message}))
})

router.get("/", restrictedView, (req, res) => {

    database.getUsersByDepartment(req.decodedToken.department)
        .then(users =>
            res.status(200).json(users))
        .catch(({stack, message}) =>
            res.status(200).json({error: "Could not retrieve users:", stack, message}))
})


module.exports = router;