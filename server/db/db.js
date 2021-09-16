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




//THIS IS TEST RUN CODE....
// function addPlantDetails(wholePlantDetails) {

//     console.log(wholePlantDetails)
//     const water = {amount: wholePlantDetails.water}
//     const light = {amount: wholePlantDetails.light}
//     const species = {common: wholePlantDetails.common, scientific: wholePlantDetails.scientific, water: wholePlantDetails.water, water_frequency: wholePlantDetails.water_frequency, light: wholePlantDetails.light, notes: wholePlantDetails.species_note}
//     const plant = {name: wholePlantDetails.name, species: wholePlantDetails.species, img: wholePlantDetails.img, note: wholePlantDetails.note}

//     addPlant(plant)
//     addWater(water)
//     addSpecies(species)
//     addlight(light)
//     return getPlantInfo(wholePlantDetails.id)
//   // return db('plants')
//   // .insert('plant.id', )
//   // .then(plantId => {
//   //   return getPlantInfo(plantId[0])
//   // })
// }


function addPlant(plant)
{
    return db('plants')
    .insert(plant)
    .then(plantId => {

      console.log("plant id", plantId)
      return getPlantById(plantId[0])
    })
    
}

function getPlantById(id)
{
  return db('plants')
  .where('id', id)
  .first()
}

function getAllSpecies()
{
  return db('species')
  .join('water','species.water','water.id')
  .join('light','species.light','light.id')
  .select('species.id',
  'common',
  'scientific',
  'water.id as water_id',
  'light.id as light_id',
  'water.amount as water_amount',
  'light.amount as light_amount',
  'water_freq',
  'notes'
  )
}


function getWaterById(id)
{
    return db('water')
    .where('id', id)
    .first()
}

function addWater(amount){
  return db('water')
  .insert(amount)
  .then(waterId => {

    return getWaterById(waterId[0])
  })
}

function addSpecies(plantSpecies){
  return db('species')
  .insert(plantSpecies)
  .then(speciesId => {
    return getSpeciesById(speciesId[0])
  })
}

function addlight(amount){
  return db('light')
  .insert(amount)
  .then(lightId => {
    return getLightById(lightId[0])
  })
}

function getLightById(id)
{
    return db('light')
    .where('id', id)
    .first()
  
}



function deletePlant(id)
{ 
  return db('plants')
  .where('id', id)
  .del()
}


function updatePlant(id, newPlant) 
{
  return db('plants')
  .where('id', id)
  .update(newPlant)
}


function getSpeciesById(id)
{
    return db('species')
    .where('id', id)
    .first()
  
}


function addSpecies (species) 
{
 return db('species')
 .insert(species)
 .then(id => {
   return getSpeciesById(id[0])
 })

}


function deletePlantBySpeciesId (speciesId) 
{
  return db('plants')
  .where('plants.species', speciesId)
}

function deleteSpecies(id) 
{ 
  deletePlantBySpeciesId(id)
  return db('species')
  .where('id', id)
  .del()
}


function updateSpecies(id, newSpecies)
{
  return db('species')
  .where('id', id)
  .update(newSpecies)
}


module.exports = {
  getPlants,
  getPlantInfo,
  //addPlantDetails,
  addPlant,
  getPlantById,
  addSpecies,
  getSpeciesById,
  addWater,
  addlight,
  getLightById,
  getWaterById,
  getAllSpecies,
  deletePlant,
  updatePlant,
  deleteSpecies,
  deletePlantBySpeciesId,
  updateSpecies
}
