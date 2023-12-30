import React from 'react'
import Category from './Category'
import Color from './Color'
import Price from './Price'
import '../ComponentCss/sideBar.css'

const SideBar = ({handleRadioClick}) => {
  return (
    <div className='sidebar'>
        <h3 className='sidebar-title'>sidebar</h3>
        <div className="category-section">
            <Category handleRadioClick={handleRadioClick}/>
        </div>
        <div className="price-section">
            <Price handleRadioClick={handleRadioClick}/>
        </div>
       <div className="color-section">
       <    Color handleRadioClick={handleRadioClick}/>
       </div>

    </div>
  )
}

export default SideBar