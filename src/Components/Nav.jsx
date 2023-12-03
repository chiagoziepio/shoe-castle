import '../ComponentCss/Nav.css'
import {NavLink} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
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
      <div className="icons-container">
        <NavLink to = '/cart'>
          <FaShoppingCart className='icon'/>
        </NavLink >
      </div>
       
    </nav>
  )
}

export default Nav