
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table){
        table.increments()
        table.string('nome').notNullable()
        table.string('cpf').notNullable()
        table.string('email').notNullable()
        table.string('telefone').notNullable()
        table.string('cep').notNullable()
        table.string('endereço').notNullable()
        table.string('cidade').notNullable()

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cliente')
};
