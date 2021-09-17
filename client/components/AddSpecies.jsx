import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { createNewSpecies, loadLight, loadWater } from '../actions'
import { Link } from 'react-router-dom'


function AddSpecies (props) {
  const { dispatch, species} = props

const water = props.water
const light = props.light


const [newSpeciesData, setNewSpecies] = useState ({
  common: '',
  scientific: '',
  frequency: '',
  notes: '',
})

const [newWaterData, setWater] = useState (0)

const [newLightData, setLight] = useState (0)

  const handleChange = (e) => {
    e.preventDefault()
    setNewSpecies({
      ...newSpeciesData,
      [e.target.name]: e.target.value
    })
  }

 const handleWater = (e) => {
   e.preventDefault()
   setWater(Number(e.target.value))
 }


 const handleLight = (e) => {
  e.preventDefault()
  // console.log(e.target.value)
  setLight(Number(e.target.value))
}
  // call get water api (that goes to db and gets everything from water db table)
      // then set response as water state
  // call get light api (that goes to db and gets everything from light db table)
      // then set response as light state

  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSpecies = {
      common: newSpeciesData.common,
      scientific: newSpeciesData.scientific,
      water_freq: newSpeciesData.frequency,
      water: newWaterData,
      light: newLightData,
      notes: newSpeciesData.notes
    }
    dispatch(createNewSpecies(newSpecies))
  }


  const { common, scientific, frequency, notes } = newSpeciesData
  return (
    <div className="base add-plant">
      <h2>Add new species</h2>
      <form onSubmit={handleSubmit}>
      <div className='new-species-label'>
          <label htmlFor='common'>Common Name:</label>
          <input name='common' value={common} type='text' onChange={handleChange}/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='scientific'>Scientific Name:</label>
          <input name='scientific' value={scientific} type='text' onChange={handleChange}/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='water'>Water:</label>
          <select name='water'value={water.id} onChange={handleWater}>
            {water.map(w => <option value={w.id} key={w.id}> {w.amount} </option>)}
          </select>
        </div> 
        <div className='new-species-label'>
          <label htmlFor='frequency'>Water Frequency (days):</label>
          <input name='frequency' value={frequency} type='number' onChange={handleChange}/>
        </div>
        <div className='new-species-label'>
          <label htmlFor='light'>Light:</label>
          <select name='light' value={light.id} onChange={handleLight}>
            {light.map(l => <option value={l.id} key={l.id}> {l.amount} </option>)}
          </select>
        </div>
        <div className='new-species-label'>
          <label htmlFor='notes'>Notes:</label>
          <input name='notes' value={notes} type='text' onChange={handleChange}/>
        </div>
        <Link to ={'/'}><button>Add Species</button></Link>
        <Link to={`/`}><button>Cancel</button></Link>
      </form>
    </div>
  )
}




function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
      water:globalState.water,
      light:globalState.light

  }
}

export default connect(mapStateToProps)(AddSpecies)