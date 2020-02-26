const database = require("../data/db-config");

module.exports = {
    getAllUsers
}

function getAllUsers() {
    return database("users");
}
