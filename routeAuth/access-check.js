const jwt = require("jsonwebtoken");

const jwtSecret = require("../data/imports/secrets").jwtSecret;

function accessCheck (req, res, next) {

}

module.exports(accessCheck);