const express = require('express')

const db = require('../db/db')

const router = express.Router()


router.get('/', (req,res) => {
  db.getAllSpecies()
  .then(allSpecies => {
    return res.json(allSpecies)
  })

})

router.get('/water', (req,res) => {
  db.getWater()
  .then(water => {
    return res.json(water)
  })
})

router.get('/light', (req,res) => {
  db.getLight()
  .then(light => {
    return res.json(light)
  })
})

router.post('/', (req, res) => {
  const species = req.body
  db.addSpecies(species)
  .then((speciesObj) => {
    return res.json(speciesObj)
  })
  .catch(error => {
    res.status(500).json(`error did not work: ${error.message}`)
})

})


router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteSpecies(id)
  .then(species => {
      console.log("delete species" , species)
      return res.json(`species id number ${id} has been deleted`)
  })
  .catch (err => {console.log(err.message)})
})


router.patch('/:id', (req, res) => {
  const id = req.params.id
  const newSpecies = req.body
  db.updateSpecies(id, newSpecies)
  .then((species) => {
    //console.log("species ", species)
      return res.json(newSpecies)
  })
  .catch (err => {console.log(err.message)})
})



module.exports = router;