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
      <img className='logo' src='/images/planticon.png'/>
      <Link to='/'><h1>PlantTrackr</h1>
      </Link>
      </div>
      <Route exact path='/' component={PlantList} />
      <Route path='/plants/:id' component={Plant} />
      <Route exact path='/' component={AddPlant}/>
      <Route exact path='/species' component={SpeciesList}/>
      <Route exact path='/species' component={AddSpecies}/>
      <Route path='/species/:id' component={Species}/>
      <Footer />
    </div>
  )
}

export default connect()(App)
