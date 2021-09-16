import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'


function Species(props)
{
  const species=props.species
  const species1 = species.find(s => s.id === Number(props.match.params.id))
  console.log(species)
  return (
        <>
          <p>{species1.common}</p>
          <p>{species1.scientific}</p>
          <p>{species1.water}</p>
          <p>{species1.water_freq}</p>
          <p>{species1.light}</p>
          <p>{species1.note}</p>
        </>
  )
}

function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
  }
}

export default connect(mapStateToProps)(Species)