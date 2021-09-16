import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {createNewPlant} from '../actions'

function AddPlant(props){
  const { dispatch ,species} = props
  
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
    setNewSpecies( e.target.value )
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
    <>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        id="addPlantName"
        name="name"
        value={newPlantName}
        onChange={handleNameChange}
      />
      <label>Note:</label>
      <input
        type="text"
        id="addPlantNote"
        name="note"
        value={newPlantNote}
        onChange={handleNoteChange}
      />
      <label>Picture:</label>
      <input
        type="file"
        id="addPlantImage"
        name="name"
        value={newPlantImage}
        onChange={handleImageChange}
      />
      <button>Add</button>
      <div>
        Species:
        <select>
          {
        species.map((s) => {
          return <option key={s.id} onChange={(e)=>handleSpeciesChange(e)}>{s.scientific}({s.common})</option>
          })
        }
        </select>
      </div> 
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

export default connect(mapStateToProps)(AddPlant)