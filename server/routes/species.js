const express = require('express')

const db = require('../db/db')

const router = express.Router()


router.get('/', (req,res) => {
  db.getAllSpecies()
  .then(allSpecies => {
    return res.json(allSpecies)
  })

})

module.exports = router;