exports.up = knex => {
  return knex.schema.createTable('plants', table => {
    table.increments('id')
    table.string('name')
    table.int('species').references('species.id')
    table.string('img')
    table.date('last_watered')
    table.text('note')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('plants')
}
