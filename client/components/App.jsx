import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import AddPlant from './AddPlant'
import { loadPlants,loadSpecies ,loadWater,loadLight} from '../actions'
import PlantList from './PlantList'
import Plant from './Plant'
import SpeciesList from './SpeciesList'
import Species from './Species'
import AddSpecies from './AddSpecies'
import Footer from './Footer' 

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
      <div className="base heading"> 
        <h1><Link to='/'>PlantTrackr</Link></h1>
      </div>
      <Route exact path='/' component={PlantList} />
      <Route path='/plants/:id' component={Plant} />
      <Route exact path='/' component={AddPlant}/>
      <Route exact path='/species' component={SpeciesList}/>
      <Switch>
        <Route exact path='/species/add' component={AddSpecies}/>
        <Route exact path='/species/:id' component={Species}/>
      </Switch>
      <Footer />
    </div>
  )
}

export default connect()(App)
