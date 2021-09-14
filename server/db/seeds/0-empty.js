exports.seed = knex => {
  const empty = (table) => knex(table).del()

  return empty('plants')
    .then(() => empty('species'))
    .then(() => empty('light'))
    .then(() => empty('water'))
}
