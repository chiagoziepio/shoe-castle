import React from 'react'
import '../ComponentCss/Products.css'
import {Link} from 'react-router-dom'
import Buttons from './Buttons'
import Card from './Card'
import SideBar from './SideBar/SideBar'

const Products = ({user,datas}) => {
  return (
    <section className='products'>
      <div className="products_sidebar">
        <SideBar/>
      </div>
      <div className="products_body">
        <div className="product_body_first">
         <h1> Hello,{user}</h1>
         <div className="products_btn"><Buttons/></div>
      </div>
        <div className='card-container'>
          <div className="card">
            {datas.map(data=>(
              <Card
               key={data.id}
               data={data}
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