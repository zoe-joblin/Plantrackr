import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import { loadPlants } from '../actions'

import PlantList from './PlantList'
import Plant from './Plant'

function App (props) {
  const { dispatch } = props

  useEffect(() => {
    dispatch(loadPlants())
  }, [])

  return (
    <div>
      <h1><Link to='/'>PlantTrackr</Link></h1>
      <Route exact path='/' component={PlantList} />
      <Route path='/plants/:id' component={Plant} />
    </div>
  )
}

export default connect()(App)
