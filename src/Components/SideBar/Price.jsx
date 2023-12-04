import React from 'react'
import Label from './Label'
const Price = () => {
  return (
    <div className='price_items'>
     
      <h3 className="sidebar-container-tile">Price</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="" name='sid2' />
          <span className='checkmark'></span>All
      </label>
      <Label
       value = {50}
       name = "sid2"
       title='$0-50'
      />
      <Label
       value = {100}
       name = "sid2"
       title='$50-100'
      />
      <Label
       value = {150}
       name = "sid2"
       title='$100-150'
      />
      <Label
       value = {200}
       name = "sid2"
       title='over $200'
      />
    </div>
  )
}

export default Price