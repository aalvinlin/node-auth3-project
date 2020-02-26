const server = require("./server");

const PORT = 5000;

server.listen(PORT, () => {
    "Server running on port " + PORT;
})