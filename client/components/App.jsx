import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import AddPlant from './AddPlant'
import { loadPlants,loadSpecies } from '../actions'
import PlantList from './PlantList'
import Plant from './Plant'

function App (props) {
  const { dispatch } = props

  useEffect(() => {
    dispatch(loadPlants())
    dispatch(loadSpecies())
  }, [])

  return (
    <div>
      <h1><Link to='/'>PlantTrackr</Link></h1>
      <Route exact path='/' component={PlantList} />
      <Route path='/plants/:id' component={Plant} />
      <Route path='/' component={AddPlant}/>
    </div>
  )
}

export default connect()(App)
