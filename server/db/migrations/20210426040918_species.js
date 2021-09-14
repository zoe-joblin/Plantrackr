exports.up = knex => {
  return knex.schema.createTable('species', table => {
    table.increments('id')
    table.string('common')
    table.string('scientific')
    table.int('water').references('water.id')
    table.int('water_freq')
    table.int('light').references('light.id')
    table.text('notes')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('species')
}
