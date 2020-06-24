
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.timestamp('deletedAt')//Campo que tem dia, hora, mes e ano       

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable('users', table => {
        table.dropColum('deletedAt')
    })
  
};
