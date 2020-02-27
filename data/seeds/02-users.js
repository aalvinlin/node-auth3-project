require("dotenv").config();

const bcrypt = require("bcryptjs");

const iterations = require("../imports/bcryptIterations").bcryptIterations;

exports.seed = function(knex) {
    
  return knex("users").insert([
    {id: 1, username: "one", password: bcrypt.hashSync("one", iterations), department: 1},
    {id: 2, username: "two", password: bcrypt.hashSync("two", iterations), department: 2},
    {id: 3, username: "three", password: bcrypt.hashSync("three", iterations), department: 3}
  ]);

};
