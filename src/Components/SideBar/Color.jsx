import React from 'react'
import Label from './Label'

const Color = ({handleRadioClick}) => {
  return (
    <div className='color-item'>
      <h3 className="sidebar-container-tile">Color</h3>
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="all" name='sid3' onClick={handleRadioClick} />
          <span className='checkmark all' ></span>All
      </label>
      <Label
       handleRadioClick={handleRadioClick}
       name = "sid3"
       title='Black'
       color= "black"
       value = "black"
      />
      <Label
      handleRadioClick={handleRadioClick}
       name = "sid3"
       title='Green'
       color= "green"
       value = "green"
      />
      <Label
      handleRadioClick={handleRadioClick}
       name = "sid3"
       title='Blue'
       color= "blue"
       value = "blue"
      />
      <Label
      handleRadioClick={handleRadioClick}
       name = "sid3"
       title='Brown'
       color= "brown"
       value = "brown"
      />
      <label className='sidebar-label-contaier'>
          <input type="radio" value ="white" name='sid3' onClick={handleRadioClick} />
          <span className='checkmark white' ></span>White
      </label>
    </div>
  )
}

export default Color