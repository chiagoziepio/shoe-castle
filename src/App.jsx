import { useState } from 'react'
import{Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct'
import Error from './Components/Error'
import Login from './Components/Login'


import Protector from './Components/Protector'

function App() {
  const [user, setUser] = useState(null)
  const [name,  setName] = useState("")
  
  return (
    <>
    
      <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         < Route path='login' element = {<Login
          name={name}
          setName={setName}
          setUser={setUser}
         />}/>
         <Route path='products' element={<Protector user={user}>
          <Products user={user} />
          
         </Protector>} />
         <Route path='products/:productId' element={<SingleProduct user={user}/>}/>
         <Route path='*' element={<Error/>}/>
       </Route>
          
          
      </Routes>
    </>
  )
}

export default App
