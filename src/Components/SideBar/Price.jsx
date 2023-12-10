import React from 'react'
import Label from './Label'
const Price = ({handleRadioClick}) => {
  return (
    <div className='price_items'>
     
      <h3 className="sidebar-container-tile">Price</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="all" name='sid2' onClick={handleRadioClick} />
          <span className='checkmark'></span>All
      </label>
      <Label
      handleRadioClick={handleRadioClick}
       value = {50}
       name = "sid2"
       title='$0-50'
      />
      <Label
      handleRadioClick={handleRadioClick}
       value = {100}
       name = "sid2"
       title='$50-100'
      />
      <Label
      handleRadioClick={handleRadioClick}
       value = {150}
       name = "sid2"
       title='$100-150'
      />
      <Label
      handleRadioClick={handleRadioClick}
       value = {200}
       name = "sid2"
       title='over $200'
      />
    </div>
  )
}

export default Price