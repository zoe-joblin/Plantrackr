import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PlantList (props) {
  const { plants, loading } = props

  return (
    <div className="base plant-list">
      <h2><u>My Plants</u></h2>
      <ul>
        {plants.map(p => <Link to={`/plants/${p.id}`} key={p.id}>
          <p><strong>{p.name}</strong></p>
        </Link>)}
      </ul>
    </div>
  )
}

function mapState2Props (globalState) {
  return {
    plants: globalState.plants,
    loading: globalState.loading
  }
}

export default connect(mapState2Props)(PlantList)
