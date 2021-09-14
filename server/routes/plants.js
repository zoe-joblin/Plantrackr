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

module.exports = router
