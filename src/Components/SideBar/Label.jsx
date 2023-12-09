import  { useState } from 'react'

const Label = ({name,value,title,color,handleRadioChange}) => {
   
  return (
    <label className='sidebar-label-contaier'>
        <input type="radio" value={value} name={name} onClick={handleRadioChange} />
        <span className='checkmark' style={{backgroundColor:color}}></span>{title}
    </label>
  )
}

export default Label