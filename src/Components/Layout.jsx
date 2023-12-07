import {Outlet} from 'react-router-dom'
import Header from './Header'
import '../ComponentCss/Layout.css'
import Footer from './Footer'

const Layout = ({cartItems}) => {
  return (
    <>
      <main className='layout'>
        <Header cartItems={cartItems}/>
        <Outlet/>
        <Footer/>
      </main>
    </>
  )
}

export default Layout