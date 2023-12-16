import '../ComponentCss/Nav.css'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart,FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRef } from 'react';

const Nav = ({cartItems}) => {
  const ul = document.querySelector("ul")
  const menuIcon = document.querySelector(".menu-icon")
  const menuIconRef = useRef()
  /* menuIconRef.current.classList.add("ok") 
  console.log(menuIconRef.current.classList);*/
  const ulRef = useRef()
  const closeiconRef = useRef()
  const handleMenuVisiblity = ()=>{
    ulRef.current.classList.add("visible")
   
    menuIconRef.current.classList.add("hide")
  }
  const hideMenu = ()=>{
    ulRef.current.classList.remove("visible");
    menuIconRef.current.classList.remove("hide")
  }
  /* menuIcon.addEventListener("click",()=>{
    ul.classList.add("visible")
    console.log("again");
  }) */
  return (
    <nav className='nav'>
      <ul className='ul' ref={ulRef}>
        <span className='menuClose' ref={closeiconRef} onClick={hideMenu}><IoClose size={30}/></span>
        <li className='nav-item'>
          <NavLink to = '/' className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to = '/products'  className='nav-link'>Products</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to = '/login'  className='nav-link'>Login</NavLink>
        </li>
      </ul>
      <div className='menu-icon' ref={menuIconRef} onClick={handleMenuVisiblity}><FaBars size={30}/></div>
      <div className="icons-container">
        <NavLink to = '/cart'>
          <FaShoppingCart className='icon' size={30}/>
          {cartItems > 0 && <span className='cartitem-number'>
            {cartItems}
          </span> }
        </NavLink >
      </div>
       
    </nav>
  )
}

export default Nav