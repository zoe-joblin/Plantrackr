import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import AddPlant from './AddPlant'
import { loadPlants,loadSpecies ,loadWater,loadLight} from '../actions'
import PlantList from './PlantList'
import Plant from './Plant'
import SpeciesList from './SpeciesList'
import Species from './Species'
import AddSpecies from './AddSpecies'

function App (props) {
  const { dispatch } = props
  useEffect(() => {
    dispatch(loadPlants())
    dispatch(loadSpecies())
    dispatch(loadWater())
    dispatch(loadLight())
  }, [])

  return (
    <div>
      <h1><Link to='/'>PlantTrackr</Link></h1>
      <Route exact path='/' component={PlantList} />
      <Route path='/plants/:id' component={Plant} />
      <Route exact path='/' component={AddPlant}/>
      <Route exact path='/species' component={SpeciesList}/>
      <Route exact path='/species' component={AddSpecies}/>
      <Route path='/species/:id' component={Species}/>
    </div>
  )
}

export default connect()(App)
