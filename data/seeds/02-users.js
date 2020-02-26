
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, username: "one", password: "one", role: 1},
        {id: 2, username: "two", password: "two", role: 2},
        {id: 3, username: "three", password: "three", role: 3}
      ]);
    });
};
