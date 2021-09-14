import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PlantList (props) {
  const { plants, loading } = props

  return (
    <div>
      <ul>
        {plants.map(p => <Link to={`/plants/${p.id}`}>
          <p>{p.name}</p>
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
