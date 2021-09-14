exports.up = knex => {
  return knex.schema.createTable('light', table => {
    table.increments('id')
    table.string('amount')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('light')
}
