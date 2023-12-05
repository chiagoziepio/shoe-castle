import React from 'react'
import Category from './Category'
import Color from './Color'
import Price from './Price'
import './Sidebar.css'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <h3 className='sidebar-title'>sidebar</h3>
        <div className="category-section">
            <Category/>
        </div>
        <div className="price-section">
            <Price/>
        </div>
       <div className="color-section">
       <    Color/>
       </div>

    </div>
  )
}

export default SideBar