
exports.seed = function(knex) {

  return knex('departments').insert([
    {id: 1, name: 'user'},
    {id: 2, name: 'admin'},
    {id: 3, name: 'hr'},
        
    ]);
};
