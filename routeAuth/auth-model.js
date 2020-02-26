const database = require("../data/db-config");

module.exports = {
    addUser,
    getAllUsers,
    getUser
}

function addUser(user) {
    return database.insert(user);
}

function getAllUsers() {
    return database("users");
}

function getUser(query) {
    return database("users")
        .where(query)
        .first();
}