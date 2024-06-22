exports.up = function(knex) {
    return knex.schema.createTable('admins', function(table) {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('admins');
};