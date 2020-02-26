
exports.up = function(knex) {
    return knex.schema
      .createTable("departments", table => {
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
  
          table.integer("department")
              .unsigned()
              .references("id")
              .inTable("departments")
              .onUpdate("CASCADE")
              .onDelete("RESTRICT")
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("departments")
  };
  