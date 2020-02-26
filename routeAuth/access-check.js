const jwt = require("jsonwebtoken");

const jwtSecret = require("../data/imports/secrets").jwtSecret;

function accessCheck (req, res, next) {

    const { authorization } = req.headers;

    if (!authorization)
        { res.status(400).json({ message: "No credentials provided."})}
    else
        {
            jwt.verify(authorization, jwtSecret, (error, decodedToken) => {
                if (error)
                    { res.status(401).json({ message: "Invalid credentials."})}
                else
                    {
                        req.decodedToken = decodedToken;
                        next();
                    }
            })
        }
}

module.exports(accessCheck);