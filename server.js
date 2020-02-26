const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routeAuth/auth-router.js");
// const userRouter = require("./routeUser/user-router.js");

const server = express();

const serverConfig = {
    origin: "http://localhost:1234",
    credentials:true
}

server.use(express.json());
server.use(cors(serverConfig));

server.get("/", (req, res) => {
    res.status(200).json({message: "User database running."});
})

module.exports = server;