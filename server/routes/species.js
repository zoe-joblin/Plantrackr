const express = require('express')

const db = require('../db/db')

const router = express.Router()


router.get('/', (req,res) => {
  db.getAllSpecies()
  .then(allSpecies => {
    return res.json(allSpecies)
  })

})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteSpecies(id)
  .then(species => {
      console.log("delete species" , species)
      return res.json(`species id number ${id} has been deleted`)
  })
})


module.exports = router;