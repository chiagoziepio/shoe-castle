import React from 'react'
import Label from './Label'

const Color = () => {
  return (
    <div className='color-item'>
      <h3 className="sidebar-container-tile">Color</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="" name='sid3' />
          <span className='checkmark all' ></span>All
      </label>
      <Label
       
       name = "sid3"
       title='Black'
       color= "black"
       value = "black"
      />
      <Label
       name = "sid3"
       title='Green'
       color= "green"
       value = "green"
      />
      <Label
       name = "sid3"
       title='Blue'
       color= "blue"
       value = "blue"
      />
      <Label
       name = "sid3"
       title='Brown'
       color= "brown"
       value = "brown"
      />
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="white" name='sid3' />
          <span className='checkmark white' ></span>White
      </label>
    </div>
  )
}

export default Color