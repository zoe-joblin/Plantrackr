import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createNewSpecies, loadLight, loadWater } from '../actions'


function AddSpecies (props) {
const {dispatch} = props
const [newSpeciesData, setNewSpecies] = useState ({
  common: '',
  scientific: '',
  frequency: '',
  notes: '',
})

const [newWaterData, setWater] = useState ('')

const [newLightData, setLight] = useState ('')

// define use state for array of water results
// define use state for array of light results

  const handleChange = (e) => {
    e.preventDefault()
    setNewSpecies({
      common: '',
      scientific: '',
      frequency: '',
      notes: '',
    })
  }

  useEffect(() => {
// call get water api (that goes to db and gets everything from water db table)
    // then set response as water state
// call get light api (that goes to db and gets everything from light db table)
    // then set response as light state
  }, [])

  

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
          {/* here you could then map over water state 
          (that you defined at the top, now populated by useEffect)
           array and return options that have water id as value and water description as option */}
          <select value={water} onChange={handleChange}>
            <option value={water0}>Give me some drips</option>
            <option value={water1}>Give me a dollop</option>
            <option value={water2}>Moisten me</option>
            <option value={water3}>Soak me</option>
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