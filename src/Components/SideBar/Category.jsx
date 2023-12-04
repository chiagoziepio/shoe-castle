import React, { useState } from 'react'
import Label from './Label'
const Category = () => {
 
  return (
    <div className='category_items'>
      <h3 className="sidebar-container-tile">Category</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="" name='sid1' />
          <span className='checkmark'></span>All
      </label>
      <Label
       value = "sneakers"
       name = "sid1"
       title='Sneakers'
      />
      <Label
       value = "heels"
       name = "sid1"
       title='Heels'
      />
      <Label
       value = "sandals"
       name = "sid1"
       title='Sandals'
      />
      <Label
       value = "flats"
       name = "sid1"
       title='Flats'
      />
    </div>
  )
}

export default Category