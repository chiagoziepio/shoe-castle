import React from 'react'
import '../ComponentCss/Products.css'
import {Link} from 'react-router-dom'



const Products = ({user}) => {
  return (
    <div>
      <h1> Hello ,{user}</h1>
        <h3>products</h3>
      <Link to = '/'>back to home</Link>
    </div>
  )
}

export default Products