import React, { useState } from 'react'
import { connect } from 'react-redux'
import {useEffect} from 'react'

import { deleteThunk, updatedPlant} from '../actions'

function Plant (props) {
  const { plants, dispatch, species } = props
  const plant = plants.find(p => p.id === Number(props.match.params.id))
  const [editing, setEditing] = useState(false)
  const [newPlant, setNewPlant] = useState(plant)
  const [plantName, setplantName] = useState(plant.name)
  const [speCies, setSpecies] = useState(plant.scientific)
  const [note, setNote] = useState(plant.note)
  const [commonName, setCommonName] = useState(plant.common)
  const [light, setLight] = useState(plant.light)
  const [water, setWater] = useState(plant.water)
  const [water_freq, setWaterFreq] = useState(plant.water_freq)
  const [speciesNote, seSpeciesNote] = useState(plant.species_notes)

  const speciesChangeHandler=(e)=>{
    var selectedSpecies=species.find(s=>s.scientific===e.target.value)
    console.log(selectedSpecies)
    setCommonName(selectedSpecies.common)
    setLight(selectedSpecies.light)
    setWater(selectedSpecies.water)
    setWaterFreq(selectedSpecies.water_freq)
    seSpeciesNote(selectedSpecies.note)
  }
  const toggleEditing = () => {
    setEditing(!editing)
    setNewPlant(plant)
  }

  const nameChangeHandler=(e) =>{
    setplantName(e.target.value)
  }

  const noteChangeHandler=(e)=>{
    setNote(e.target.value)
  }


  const showPlant = () => {
    return <>
      <img src={`/images/${plant.img}`} style={{ maxWidth: '300px' }}/>
      <h3>{plant.name}</h3>
      <p>{plant.common} | {plant.scientific}</p>
      <p>Light: {plant.light}</p>
      <p>Water: {plant.water} and make sure it happens every {plant.water_freq} days</p>
      <p>Personal notes about {plant.name}: {plant.note}</p>
      <p>Notes on Species: {plant.species_notes}</p>

      <button onClick={editPlant}>Edit</button>
      {/* <button onClick={() => setEditing(plant.id)}>Edit</button> */} {/* toggle editing  */}
      {/* <button onClick={() => dispatch(updatedPlant(plant, newPlant))}>Edit</button> */}
      <button onClick={() => dispatch(deleteThunk(plant.id))}>Delete</button>
    </>
  }

  return (
    <div>
      {plant && showPlant()}
      {/* {editPlant} */}
    </div>
  )
}

function mapState2Props (globalState) {
  return {
    plants: globalState.plants,
    loading: globalState.loading,
    species: globalState.species,
  }
}

export default connect(mapState2Props)(Plant)
