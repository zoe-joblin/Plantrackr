const db = require('./connection')

function getPlants () {
  return db('plants')
    .join('species', 'species', 'species.id')
    .join('water', 'water', 'water.id')
    .join('light', 'light', 'light.id')
    .select(
      'plants.id',
      'name',
      'species.id AS species_id',
      'common',
      'scientific',
      'img',
      'light.id AS light_id',
      'light.amount AS light',
      'water.id AS water_id',
      'water.amount AS water',
      'water_freq',
      'last_watered',
      'note',
      'notes AS species_notes',
    )
}

function getPlantInfo (id) {
  return db('plants')
    .join('species', 'species', 'species.id')
    .join('water', 'water', 'water.id')
    .join('light', 'light', 'light.id')
    .where('plants.id', id)
    .first()
    .select(
      'plants.id',
      'name',
      'species.id AS species_id',
      'common',
      'scientific',
      'img',
      'light.id AS light_id',
      'light.amount AS light',
      'water.id AS water_id',
      'water.amount AS water',
      'water_freq',
      'last_watered',
      'note',
      'notes AS species_notes',
    )
}

module.exports = {
  getPlants,
  getPlantInfo
}
