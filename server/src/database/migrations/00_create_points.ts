import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR TABELA
    return knex
        .schema
        .createTable('points', table => {
            table.increments('id').primary();
            table.string('image').notNullable;
            table.string('name').notNullable;
            table.string('email').notNullable;
            table.string('wpp').notNullable;
            table.string('city').notNullable;
            table.string('uf', 2).notNullable;
            table.decimal('longitude').notNullable;
            table.decimal('latitude').notNullable;


        });
}

export async function down(knex: Knex) {
    //DELETAR TABELA
    return knex.schema.dropTable('points');
}