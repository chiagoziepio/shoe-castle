import React, { useState } from 'react'
import Label from './Label'
const Category = ({handleRadioChange}) => {
 
  return (
    <div className='category_items'>
      <h3 className="sidebar-container-tile">Category</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="all" name='sid1' onClick={handleRadioChange} />
          <span className='checkmark'></span>All
      </label>
      <Label
       value = "sneakers"
       name = "sid1"
       title='Sneakers'
       handleRadioChange={handleRadioChange}
      />
      <Label
       value = "heels"
       name = "sid1"
       title='Heels'
       handleRadioChange={handleRadioChange}
      />
      <Label
       value = "sandals"
       name = "sid1"
       title='Sandals'
       handleRadioChange={handleRadioChange}
      />
      <Label
       value = "flats"
       name = "sid1"
       title='Flats'
       handleRadioChange={handleRadioChange}
      />
    </div>
  )
}

export default Category