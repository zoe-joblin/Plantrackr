exports.up = knex => {
  return knex.schema.createTable('water', table => {
    table.increments('id')
    table.string('amount')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('water')
}
