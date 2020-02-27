require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    "Server running on port " + PORT;
})