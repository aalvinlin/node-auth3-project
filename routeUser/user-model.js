const database = require("../data/db-config");

module.exports = {
    getAllUsers
}

function getAllUsers() {
    return database("users")
        .join("departments", "users.id", "=", "departments.id")
        .select("users.id", "users.username", "departments.name as department")
        .orderBy("users.id");
}
