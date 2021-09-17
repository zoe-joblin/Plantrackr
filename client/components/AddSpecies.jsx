import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createNewSpecies } from '../actions'
import { Link } from 'react-router-dom'


function AddSpecies (props) {

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
      [evt.target.name]: evt.target.value,
      ...newSpeciesData
    }))
  }




  const { common, scientific, water, frequency, light, notes } = newSpeciesData
  return (
    <div className="base add-plant">
      <h2>Add new species</h2>
      <form onSubmit={handleSubmit}>
        <div className='new-species-label'>
          <label htmlFor='name'>Common Name:</label>
          <input name='name' value={common} type='text' onChange={handleChange}/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='name'>Scientific Name:</label>
          <input name='name' value={scientific} type='text' onChange={handleChange}/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='name'>Water:</label>
          <select value={water} onChange={handleChange}>
            <option value={water}>Give me some drips</option>
            <option value={water}>Give me a dollop</option>
            <option value={water}>Moisten me</option>
            <option value={water}>Soak me</option>
          </select>
        </div>
        <div className='new-species-label'>
          <label htmlFor='name'>Water Frequency:</label>
          <input name='name' value={frequency} type='text' onChange={handleChange} placeholder="2 days"/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='name'>Light:</label>
          <select value={light} onChange={handleChange}>
            <option value={light}>I really don't mind</option>
            <option value={light}>Shady</option>
            <option value={light}>Indirect light</option>
            <option value={light}>Direct sun</option>
          </select>
        </div>
        <div className='new-species-label'>
          <label htmlFor='name'>Notes:</label>
          <input name='name' value={notes} type='text' onChange={handleChange}/>
        </div>
        <button>Add Species</button>
        <Link to={`/`}><button>Cancel</button></Link>
      </form>
    </div>
  )
}




function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
  }
}

export default connect(mapStateToProps)(AddSpecies)