import React from 'react'
import '../ComponentCss/Products.css'
import {Link} from 'react-router-dom'
import Buttons from './Buttons'
import Card from './Card'
import SideBar from './SideBar/SideBar'

const Products = ({user,datas, handleAddToCart,search, setSearch,handleBtnClick,handleRadioClick}) => {
  const userEdited = user.toUpperCase()
  return (
    <section className='products'>
      <div className="products_sidebar">
        <SideBar handleRadioClick={handleRadioClick}/>
      </div>
      <div className="products_body">
        <div className="product_body_first">
         <h1 className='username'> Hello,<span>{userEdited}</span> </h1>
         <div className="products_btn"><Buttons search={search} setSearch={setSearch} handleBtnClick={handleBtnClick}/></div>
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