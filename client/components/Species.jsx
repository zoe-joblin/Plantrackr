import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'


function Species(props) {

  const {species,water,light} = props
  const species1 = species.find(s => s.id === Number(props.match.params.id))
  console.log(species1)
  const [ediTing,setEditing] = useState(false)
  const [comMon,setCommon] = useState(species1.common)
  const [scienTific,setScientific] = useState(species1.scientific)
  const [waterID,setWaterID] = useState(species1.water_id)
  const [waterAmount,setWaterAmount] = useState(species1.water_amount)
  const [waterFreq,setWaterFreq] = useState(species1.water_freq)
  const [liGhtID,setLightID] = useState(species1.light_id)
  const [noTe,setnoTe] = useState(species1.notes)


  
  const waterHandler=(e)=>{
      setWaterID(parseInt(e.target.value))
  }
  const lightHandler=(e)=>{
    setLightID(parseInt(e.target.value))
  }
  const commonHandler=(e)=>{
      setCommon(e.target.value)
  }
  const scientificHandler=(e)=>{
      setScientific(e.target.value)
  }
  const waterfHandler=(e)=>{
          setWaterFreq(e.target.value)
  }
  const noteHandler=(e)=>{
     setnoTe(e.target.value)
  }

  const submitHandler=()=>{
      setEditing(!ediTing)
  }


  return (
        <>
        <div>
          Common Name:{ediTing? <input value={comMon} onChange={commonHandler}>{comMon}</input> : <p>{species1.common}</p>}
          Scientific Name:{ediTing? <input value={scienTific} onChange={scientificHandler}>{scienTific}</input> : <p>{species1.scientific}</p>}
          Water Amount:{ediTing ?<select onChange={(e)=>waterHandler(e)}>
            {
              water.map((w)=>{
                return <option key={w.id} >{w.id}{w.amount}</option>
              })
            }
            </select> : <p>{species1.water_amount}</p>}
          Light: {ediTing? <select onChange={(e)=>lightHandler(e)}>
            {
              light.map((l)=>{
                return <option key={l.id}>{l.id}{l.amount}</option>
              })
            }
            </select> : <p>{species1.light_amount}</p>}
          Water Freq:{ediTing? <input value={waterFreq} onChange={waterfHandler}>{waterFreq}</input> : <p>{species1.water_freq}</p>}
          Note: {ediTing? <input value={noTe} onChange={noteHandler}>{noTe}</input> : <p>{species1.notes}</p>}
          <button onClick={submitHandler}>update</button>
          </div>
        </>
  )
}

function mapStateToProps(globalState)
{
  return  {
      species:globalState.species,
      water:globalState.water,
      light:globalState.light
  }
}

export default connect(mapStateToProps)(Species)