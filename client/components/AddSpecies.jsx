import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createNewSpecies } from '../actions'


function AddSpecies (props) {
const {dispatch} = props
const [newSpeciesData, setNewSpecies] = useState ({
  common: '',
  scientific: '',
  water: '',
  frequency: '',
  light: '',
  notes: '',
})

  const handleChange = (e) => {
    e.preventDefault()
    setNewSpecies({
      common: '',
      scientific: '',
      water: '',
      frequency: '',
      light: '',
      notes: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewSpecies({
      [e.target.name]: e.target.value,
      ...newSpeciesData
    }))
  }

  const { common, scientific, water, frequency, light, notes } = newSpeciesData
  return (
    <>
      <h4>Add new species</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Common Name:</label>
          <input name='name' value={common} type='text' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='name'>Scientific Name:</label>
          <input name='name' value={scientific} type='text' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='name'>Water:</label>
          <select value={water} onChange={handleChange}>
            <option value={water}>Give me some drips</option>
            <option value={water}>Give me a dollop</option>
            <option value={water}>Moisten me</option>
            <option value={water}>Soak me</option>
          </select>
        </div>
        <div>
          <label htmlFor='name'>Water Frequency (days):</label>
          <input name='name' value={frequency} type='text' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='name'>Light:</label>
          <select value={light} onChange={handleChange}>
            <option value={light}>I really don't mind</option>
            <option value={light}>Shady</option>
            <option value={light}>Indirect light</option>
            <option value={light}>Direct sun</option>
          </select>
        </div>
        <div>
          <label htmlFor='name'>Notes:</label>
          <input name='name' value={notes} type='text' onChange={handleChange}/>
        </div>
        <button>Add Species</button>
      </form>
    </>
  )
}




function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
  }
}

export default connect(mapStateToProps)(AddSpecies)