import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {creatNewPlant} from '../actions'
// import ReactDropdown from 'react-dropdown'

function AddPlant(props)
{
  const [speCies,setSpecies] = useState("")
  var species = props.species
  // var speciesArr=[]
  // const defaultOption = species[0]
  // species.map(s=>speciesArr.push(s.scientific))
  const speciesChangeHandler = (i)=>{
    console.log(i)
  }
  return (
    <>
    <div>Name:<input id='name'></input></div>
    <div>Note:<input id='note'></input></div>
    <div>Species:<select>
    {/* <div>Species:<ReactDropdown options={speciesArr}></ReactDropdown></div> */
      species.map((s)=>{
        return <option key={s.id} onChange={(key)=>speciesChangeHandler(key)}>{s.scientific}({s.common})</option>
      })
    }
     </select>
    </div>
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