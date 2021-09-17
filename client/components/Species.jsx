import React, { useState }from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'


function Species(props) {

  const {species,water,light} = props
  const species1 = species.find(s => s.id === Number(props.match.params.id))
  console.log(species1)

  const [ediTing,setEditing] = useState(false)
  const [comMon,setCommon] = useState('')
  const [scienTific,setScientific] = useState('')
  const [waTer,setWater] = useState('')
  const [liGht,setLight] = useState('')
  const [waterFreq,setWaterFreq] = useState('')
  const [noTe,setnoTe] = useState('')
  const [waTerAmount,setWaterAmount] = useState('')
  const [liGhtAmount,setLightAmount] = useState('')



  useEffect(()=>{
    if(species1)
    {
      setCommon(species1.common)
      setScientific(species1.scientific)
      setWaterAmount(species1.water_amount)
      setWaterFreq(species1.water_freq)
      setnoTe(species1.notes)
      setWater(water)
      setLight(light)
      setWaterAmount(species1.water_amount)
      setLightAmount(species1.light_amount)
    }
  },[species1])
  
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
  
                Common Name:{ediTing? <input type="text" value={comMon} onChange={commonHandler}></input> : <p>{comMon}</p>}
                Scientific Name:{ediTing? <input  type="text" value={scienTific} onChange={scientificHandler}></input> : <p>{scienTific}</p>}
                Water Amount:{ediTing? <select onChange={(e)=>waterHandler(e)}>
                  {
                    waTer.map((w)=>{
                      return <option key={w.id} >{w.id}{w.amount}</option>
                    })
                  }
                  </select> : <p>{waTerAmount}</p>}
                Light: {ediTing? <select onChange={(e)=>lightHandler(e)}>
                  {
                    liGht.map((l)=>{
                      return <option key={l.id}>{l.id}{l.amount}</option>
                    })
                  }
                  </select> : <p>{liGhtAmount}</p>}
                Water Freq:{ediTing? <input type="text" value={waterFreq} onChange={waterfHandler}></input> : <p>{waterFreq}</p>}
                Note: {ediTing? <input type="text" value={noTe} onChange={noteHandler}></input> : <p>{noTe}</p>}
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