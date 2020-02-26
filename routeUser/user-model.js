const database = require("../data/db-config");

module.exports = {
    getAllUsers
}

function getAllUsers() {
    return database("users")
        .leftJoin("departments", "users.department", "=", "departments.id")
        .select("users.id", "users.username", "departments.name as department")
        .orderBy("users.id");
}

function getUsersByDepartment() {

    return database("users")
        .leftJoin("departments", "users.department", "=", "departments.id")
        .select("users.id", "users.username", "departments.name as department")
        .where("users.department", "=", req.decodedToken.department)
        .orderBy("users.id");
}
