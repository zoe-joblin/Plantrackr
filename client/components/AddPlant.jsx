import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {creatNewPlant} from '../actions'
import ReactDropdown from 'react-dropdown'

function AddPlant(props)
{
  var species = props.species
  var speciesArr=[]
  const defaultOption = species[0]
  species.map(s=>speciesArr.push(s.scientific))
  useEffect(()=>{

  },[])

  return (
    <>
    <div>Name:<input id='name'></input></div>
    <div>Note:<input id='note'></input></div>
    <div>Species:<ReactDropdown options={speciesArr}></ReactDropdown></div>
 
    
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