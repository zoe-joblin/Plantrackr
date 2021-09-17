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
    <div className="base plant-list">
    <h2>Species</h2>
    <ul>
      {species.map(s => <Link to={`/species/${s.id}`} key={s.id}>
        <p><strong>{s.common}</strong></p>
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