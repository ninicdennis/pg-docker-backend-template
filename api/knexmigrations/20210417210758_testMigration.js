
exports.up = function(knex) {
  return knex.schema.createTable('test', t => {
    t.increments('id').primary();
    t.string('value');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('test')
};
