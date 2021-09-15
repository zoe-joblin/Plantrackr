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


// {
//   "id": 1,
//   "name": "Michelle Ssssavage",
//   "species_id": 1,
//   "common": "Snake Plant",
//   "scientific": "Dracaena Trifasciata",
//   "img": "snake_plant.jpg",
//   "light_id": 0,
//   "light": "i really don't mind",
//   "water_id": 1,
//   "water": "a dollop",
//   "water_freq": 20,
//   "last_watered": null,
//   "note": "is cute",
//   "species_notes": "The plant features stiff, sword-like leaves ranging from 6 inches to 8 feet tall. Snake plants can vary in color; although, many have green banded leaves and commonly feature a yellow border. These plants are easy to grow and, in many cases, nearly indestructible when it comes to care. They will thrive in very bright light or almost dark corners of the house. These plants generally grow slowly in indoor light, but increasing its light exposure will boost growth if it gets a few hours of direct sun. If planting or repotting, do it in the spring. This plant is toxic to cats and dogs"
 
// }


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

function getAllSpecies(){

  return db('species')
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

function getSpeciesById(id)
{
    return db('species')
    .where('id', id)
    .first()
  
}


// function getPlantById(id){

//   return db('plants')
//   .join('species', 'species', 'species.id')
//   .join('water', 'water', 'water.id')
//   .join('light', 'light', 'light.id')
//   .select(
//     'plants.id',
//     'name',
//     'species.id AS species_id',
//     'common',
//     'scientific',
//     'img',
//     'light.id AS light_id',
//     'light.amount AS light',
//     'water.id AS water_id',
//     'water.amount AS water',
//     'water_freq',
//     'last_watered',
//     'note',
//     'notes AS species_notes',
//   )
//   .where('plant.id', id)
//   .first()
// }


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



module.exports = {
  getPlants,
  getPlantInfo,
  //addPlantDetails,
  addPlant,
  getPlantById,
  getSpeciesById,
  getLightById,
  getWaterById,
  getAllSpecies,
  deletePlant,
  updatePlant
}
