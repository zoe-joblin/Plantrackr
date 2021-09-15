const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPlants()
    .then(plants => {
      res.json(plants)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.get('/:id', (req, res) => {
  let { id } = req.params
  db.getPlantInfo(id)
    .then(plant => {
      res.json(plant)
    })
    .catch(err => res.status(500).json({ message: err.message }))
})

router.post('/', (req,res) => {


  const plant = req.body
 // plant = JSON.parse(plant)
  // plant.note = JSON.stringify(plant.note)
  //console.log('plant ', plant)
  db.addPlant(plant)
  .then(eachPlant => {
    console.log("each plant ",eachPlant)
   // eachPlant.note = JSON.parse(eachPlant.note)
    return res.json(eachPlant)
  })
  .catch(error => {
    res.status(500).json(`error did not work: ${error.message}`)
  })

})

router.get('/species', (req,res) => {

  db.getAllSpecies()
  .then(allSpecies => {
    return res.json(allSpecies)
  })

})

module.exports = router
