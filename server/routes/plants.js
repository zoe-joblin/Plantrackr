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
  db.addPlant(plant)
  .then(eachPlant => {
    //console.log("each plant ",eachPlant)
    return res.json(eachPlant)
  })
  .catch(error => {
    res.status(500).json(`error did not work: ${error.message}`)
  })

})


router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deletePlant(id)
  .then(plant => {
      //console.log("delete plant" , plant)
      return res.json(`plant id number ${id} has been deleted`)
  })
})


router.patch('/:id', (req, res) => {
  const id = req.params.id
  const newPlant = req.body
  db.updatePlant(id, newPlant)
  .then(plant => {
    //console.log("updatePlant", plant)
    return res.json(newPlant)
  })
}) 






module.exports = router
