import React, { useState } from 'react'
import Label from './Label'
const Category = ({handleRadioClick}) => {
 
  return (
    <div className='category_items'>
      <h3 className="sidebar-container-tile">Category</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="all" name='sid1' onClick={handleRadioClick} />
          <span className='checkmark'></span>All
      </label>
      <Label
       value = "sneakers"
       name = "sid1"
       title='Sneakers'
       handleRadioClick={handleRadioClick}
      />
      <Label
       value = "heels"
       name = "sid1"
       title='Heels'
       handleRadioClick={handleRadioClick}
      />
      <Label
       value = "sandals"
       name = "sid1"
       title='Sandals'
       handleRadioClick={handleRadioClick}
      />
      <Label
       value = "flats"
       name = "sid1"
       title='Flats'
       handleRadioClick={handleRadioClick}
      />
    </div>
  )
}

export default Category