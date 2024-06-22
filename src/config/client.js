exports.up = function(knex) {
    return knex.schema.createTable('clients', function(table) {
        table.increments('id').primary();
        table.string('investor_email').unique().notNullable();
        table.string('investor_name').notNullable();
        table.string('investor_phone').notNullable();
        table.string('investor_position').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};