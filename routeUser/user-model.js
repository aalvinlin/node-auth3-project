const database = require("../data/db-config");

module.exports = {
    getAllUsers,
    getUsersByDepartment
}

function getAllUsers() {
    return database("users")
        .leftJoin("departments", "users.department", "=", "departments.id")
        .select("users.id", "users.username", "departments.name as department")
        .orderBy("users.id");
}

function getUsersByDepartment(department) {

    console.log("checking department,", department)

    return database("users")
        .leftJoin("departments", "users.department", "=", "departments.id")
        .select("users.id", "users.username", "departments.name as department")
        .where("users.department", "=", department)
        .orderBy("users.id");
}
