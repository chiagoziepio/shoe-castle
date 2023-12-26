import React from 'react'
import '../ComponentCss/Footer.css'
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const theYear = new Date();
  return (
    <footer>
      <p>copywright &copy; Shoe Castle, {theYear.getFullYear()} </p>
      <div className="githubLink">
        <a href="https://github.com/chiagoziepio/shoe-castle"><FaGithub size={30} className='githubicon'/>checkout the source code</a>
      </div>
    </footer>
  )
}

export default Footer