import React from 'react'
import '../ComponentCss/Header.css'
import Nav from './Nav'
import Logo from './Logo'



const Header = ({cartItems}) => {
  return (
  <>
  <header className='header'>
    <Logo/>
    <Nav cartItems={cartItems} />
  </header>
    
    
   
    </>
  )
}

export default Header