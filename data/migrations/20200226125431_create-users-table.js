
exports.up = function(knex) {
  return knex.schema
    .createTable("roles", table => {
        table.increments();

        table.string("name")
            .unique()
    })

    .createTable("users", table => {
        table.increments();

        table.string("username", 32)
            .unique()
            .notNullable();

        table.string("password", 32)
            .notNullable();

        table.integer("role")
            .unsigned()
            .references("id")
            .inTable("roles")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
};
