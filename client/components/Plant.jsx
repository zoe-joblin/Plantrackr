import React, { useState } from 'react'
import { connect } from 'react-redux'
import {useEffect} from 'react'

import { deleteThunk, updatedPlant} from '../actions'

function Plant (props) {

  const { plants, dispatch, species } = props
  // console.log(props.species)
  const plant = plants.find(p => p.id === Number(props.match.params.id))
  const id=plant.id;

  const [editing, setEditing] = useState(false)
  const [plantName, setplantName] = useState(plant.name)
  const [imAge, setImage] = useState(plant.img)
  const [speCies, setSpecies] = useState(plant.species_id)
  const [scienTific, setScientific] = useState(plant.scientific)
  const [note, setNote] = useState(plant.note)
  const [commonName, setCommonName] = useState(plant.common)
  const [light, setLight] = useState(plant.light)
  const [water, setWater] = useState(plant.water)
  const [water_freq, setWaterFreq] = useState(plant.water_freq)
  const [speciesNote, seSpeciesNote] = useState(plant.species_notes)

  const speciesChangeHandler=(e)=>{
    var selectedSpecies=species.find(s=>s.scientific===e.target.value)
    console.log(selectedSpecies)
    setSpecies(selectedSpecies.id)
    setCommonName(selectedSpecies.common)
    setScientific(selectedSpecies.scientific)
    setLight(selectedSpecies.light)
    setWater(selectedSpecies.water)
    setWaterFreq(selectedSpecies.water_freq)
    seSpeciesNote(selectedSpecies.notes)
  }

  const toggleEditing = () => {
     if(editing==true)
    {
      const newPlant={
        name:plantName,
        img:imAge,
        species:speCies,
        note:note,
        }
        console.log(newPlant)
      dispatch(updatedPlant(id,newPlant))
    }
    setEditing(!editing)
  }

  const nameChangeHandler=(e) =>{
    setplantName(e.target.value)
  }

  const noteChangeHandler=(e)=>{
    setNote(e.target.value)
  }


  const showPlant = () => {
    return <div className="base plant-details">
            <img src={`/images/${plant.img}`} style={{ maxWidth: '300px' }}/>
            <div>
            {editing?<button onClick={toggleEditing}>Save Details</button> : <button onClick={toggleEditing}>Edit Details</button>}
            {editing?<button type='button' disabled>Delete Plant</button> : <button onClick={() => dispatch(deleteThunk(plant.id))}>Delete Plant</button>}
            </div>
            <div>
            Plant Name: {editing?<input value={plantName} onChange={(e)=>nameChangeHandler(e)}></input> : <p>{plantName}</p>}
            Note: {editing? <input value={note} onChange={(e)=>noteChangeHandler(e)}></input> : <p>{note}</p>}
            {editing ?<select onChange={(e)=>speciesChangeHandler(e)}>
            {
              species.map((s)=>{
                return <option key={s.id} value={s.scientific}>{s.scientific}({s.common})</option>
              })
            }
            </select> : <p>Species: {scienTific}</p>}
            <p> Common Name: {commonName}</p>
            <p> Preferred amount of light: {light}</p>
            <p> How much water to give me: {water} every {water_freq} days</p>
            <p> Notes on Species: {speciesNote}</p>       
            </div>  
    </div>
  }

  return (
    <div>
      {plant && showPlant()}
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
