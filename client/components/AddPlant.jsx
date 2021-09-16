import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {createNewPlant} from '../actions'

function AddPlant(props){
  const { dispatch ,species,water,light} = props
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewPlant({
      name: newPlantName, 
      note: newPlantNote, 
      img: newPlantImage,
      species:newSpecies,
    }))
  }
  const [newSpecies,setNewSpecies] = useState('')
   const [newPlantName, setNewPlantName] = useState('')
  const [newPlantNote, setNewPlantNote] = useState('')
  const [newPlantImage, setNewPlantImage] = useState('')

  const handleNameChange = (e) => {
    setNewPlantName( e.target.value )
  }

  const handleNoteChange = (e) => {
    setNewPlantNote( e.target.value )
  }

  const handleImageChange = (e) => {
    setNewPlantImage( e.target.value )
  }

  const handleSpeciesChange = (e) => {
    console.log(parseInt(e.target.value) )
    setNewSpecies(parseInt(e.target.value) )
  }

  // const [species,setSpecies] = useState("")
  // var species = props.species
  // var speciesArr=[]
  // const defaultOption = species[0]
  // species.map(s=>speciesArr.push(s.scientific))
  // const speciesChangeHandler = (i)=>{
  //   console.log(i)
  // }

  return (
    <div className="base add-plant">
    <h2>Add Plant</h2>
    <form onSubmit={handleSubmit}>
      <label>Name </label>
      <input
        type="text"
        id="addPlantName"
        name="name"
        placeholder="Alex"
        value={newPlantName}
        onChange={handleNameChange}
      />
      <br/>
      <label>Note </label>
      <input
        type="text"
        id="addPlantNote"
        name="note"
        placeholder="My fave plant etc"
        value={newPlantNote}
        onChange={handleNoteChange}
      />
      <br/>
      <label>Picture </label>
      <input
        type="text"
        id="addPlantImage"
        name="name"
        placeholder="example.png"
        value={newPlantImage}
        onChange={handleImageChange}
      />
      <br/>
      <label>Species </label>
        <select  onChange={e=>handleSpeciesChange(e)}>
        <option value="" selected disabled hidden>Click here!</option>
          {
        species.map((s) => {
          return <option key={s.id}>{s.id}{s.scientific}({s.common})</option>
          })
        }
        </select>
        <br/>
      <button>Add</button>
    </form>
    </div>
  )
}

function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
      water:globalState.water,
      light:globalState.light,
  }
}

export default connect(mapStateToProps)(AddPlant)