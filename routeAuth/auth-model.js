const database = require("../data/db-config");

module.exports = {
    addUser,
    getUser
}

function addUser(user) {
    return database.insert(user);
}

function getUser(query) {
    return database("users")
        .where(query)
        .first();
}