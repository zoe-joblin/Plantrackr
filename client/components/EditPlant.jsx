import React, { useState } from 'react'
import { connect } from 'react-redux'

import { updatedPlant } from '../actions'

const editPlant = ({ plant, done, dispatch }) => {
  const [newName, setNewName] = useState(plant.name)


}

const handleChange = (e) => {
  setNewName(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  // alert(plant.name + ", is now called " + newName)
  dispatch(updatedPlant(plant, newName))
  done()
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="editPlant">New name:</label>
      <input
        type="text"
        id="editPlant"
        name="name"
        value={newName}
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  </>
)
}

export default connect()(EditPlant)