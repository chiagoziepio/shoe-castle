import React from 'react'
import '../ComponentCss/Products.css'
import {Link} from 'react-router-dom'
import Buttons from './Buttons'
import Card from './Card'
import SideBar from './SideBar/SideBar'
import { FaAnglesDown } from "react-icons/fa6";
import { useRef } from 'react'
import { IoClose } from "react-icons/io5";

const Products = ({user,datas, handleAddToCart,search, setSearch,handleBtnClick,handleRadioClick}) => {
  const userEdited = user.toUpperCase()
  const sideBarRef = useRef()
  const sidebarDisplayRef = useRef()
  
  const handleDisplaySidebar = ()=>{
    sideBarRef.current.classList.add("drop")
    sidebarDisplayRef.current.classList.add("hide")
  }
  const handleHideSidebar = ()=>{
    sideBarRef.current.classList.remove("drop")
    sidebarDisplayRef.current.classList.remove("hide")
  }
  
  return (
    <section className='products' >
      <div className="products_sidebar" ref={sideBarRef}>
        <IoClose className='sidebarCloseIcon' size={30} role='button' aria-label='close sidebar'onClick={handleHideSidebar}/>
        <SideBar handleRadioClick={handleRadioClick}/>
      </div>
      <div className="products_body">
        <div className="product_body_first">
          <div className="sidebarIcon" ref={sidebarDisplayRef} >
            <FaAnglesDown className='displaysidebar' size={30} role='button' aria-label='display siderbar' onClick={handleDisplaySidebar}  />
          </div>
          
         <h1 className='username'> Hello,<span>{userEdited}</span> </h1>
         <div className="products_btn"><Buttons search={search} setSearch={setSearch} handleBtnClick={handleBtnClick}/>
        
         </div>
      </div>
        <div className='card-container'>
          <div className="card">
            {datas.map(data=>(
              <Card
               key={data.id}
               data={data}
               handleAddToCart={handleAddToCart}
               
              />
            ))}
          </div>
        </div>
        <Link to = '/'>back to home</Link>
      </div>
      
      
    </section>
  )
}

export default Products