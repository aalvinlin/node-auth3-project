
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, name: 'user'},
        {id: 2, name: 'admin'},
        {id: 3, name: 'hr'},
        
      ]);
    });
};
