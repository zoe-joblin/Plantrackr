import React from 'react'
import { connect } from 'react-redux'

function Plant (props) {
  const { plants, loading } = props
  const plant = plants.find(p => p.id === Number(props.match.params.id))

  const showPlant = () => {
    return <>
      <img src={`/images/${plant.img}`} style={{ maxWidth: '300px' }}/>
      <h3>{plant.name}</h3>
      <p>{plant.common} | {plant.scientific}</p>
      <p>Light: {plant.light}</p>
      <p>Water: {plant.water} and make sure it happens every {plant.water_freq} days</p>
      <p>Personal notes about {plant.name}: {plant.note}</p>
      <p>Notes on Species: {plant.species_notes}</p>

      <button onClick={toggleEditing}>Edit</button>
      <button onClick={deletePlant}>Delete</button>
    </>
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
    loading: globalState.loading
  }
}

export default connect(mapState2Props)(Plant)
