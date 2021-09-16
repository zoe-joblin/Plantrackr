import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Species  from './Species'
import {Link} from 'react-router-dom'


function SpeciesList(props)
{
  var {species} = props
  console.log(species)
  return (
    <>
    <div>
    <ul>
      {species.map(s => <Link to={`/species/${s.id}`} key={s.id}>
        <p>{s.common}</p>
      </Link>)}
    </ul>
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

export default connect(mapStateToProps)(SpeciesList)