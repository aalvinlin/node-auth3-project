const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const authRouter = require("./routeAuth/auth-router.js");
const userRouter = require("./routeUser/user-router.js");

const accessCheck = require("./routeAuth/access-check");

const server = express();

const serverConfig = {
    origin: "http://localhost:1234",
    credentials:true
}

server.use(express.json());
server.use(cors(serverConfig));

server.use("/api/auth", authRouter);
server.use("/api/users", accessCheck, userRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "User database running."});
})

module.exports = server;