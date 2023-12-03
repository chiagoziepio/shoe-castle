import React from 'react'
import '../ComponentCss/Footer.css'

const Footer = () => {
  const theYear = new Date();
  return (
    <footer>
      <p>copywright &copy; Shoe Castle, {theYear.getFullYear()} </p>
    </footer>
  )
}

export default Footer