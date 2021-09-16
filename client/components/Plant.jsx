import React, { useState } from 'react'
import { connect } from 'react-redux'

import { deleteThunk, updatedPlant} from '../actions'

function Plant (props) {
  const { plants, dispatch } = props
  const plant = plants.find(p => p.id === Number(props.match.params.id))

  // const [editing, setEditing] = useState(false)     {/* toggle editing  */}
  const [newPlant, setNewPlant] = useState(plant)

  // const toggleEditing = () => {
  //   setEditing(!editing)
  //   setNewPlant(plant)
  // }

  const editPlant = () => {
    // dispatch(updatedPlant(plant, newPlant))
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
    loading: globalState.loading
  }
}

export default connect(mapState2Props)(Plant)
