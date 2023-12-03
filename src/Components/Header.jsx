import React from 'react'
import '../ComponentCss/Header.css'
import Nav from './Nav'
import Logo from './Logo'



const Header = () => {
  return (
  <>
  <header className='header'>
    <Logo/>
    <Nav/>
  </header>
    
    
   
    </>
  )
}

export default Header