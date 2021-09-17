exports.up = knex => {
  return knex.schema.createTable('species', table => {
    table.increments('id').primary()
    table.string('common')
    table.string('scientific')
    table.integer('water').references('water.id')
    table.integer('water_freq')
    table.integer('light').references('light.id')
    table.text('notes')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('species')
}
