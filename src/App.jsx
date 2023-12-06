import { useState,useEffect } from 'react'
import{Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Products from './Components/Products'
import SingleProduct from './Components/SingleProduct'
import Error from './Components/Error'
import Login from './Components/Login'
import Cart from './Components/Cart'


import Protector from './Components/Protector'

function App() {
  const API_URL = "http://localhost:3500/products";
  const [user, setUser] = useState(null);
  const [name,  setName] = useState("");
  const [email, setEmail] = useState("")
  const [datas, setDatas] = useState([])
  
 useEffect(()=>{
  const fetchProducts = async()=>{
    try{
      const response = await fetch(API_URL);
      if(!response.ok) throw Error("did not recieve expected data")
      const data = await response.json();
     
      setDatas(data);
      
    }catch(Error){
      console.log(`Error ${Error}`);
    }

  }
  fetchProducts()
 },[])
  
  
  return (
    <>
    
      <Routes>
       <Route path='/' element={<Layout/>}>
         <Route index element={<Home/>}/>
         < Route path='login' element = {<Login
          name={name}
          setName={setName}
          setUser={setUser}
          email={email}
          setEmail={setEmail}
         />}/>
         <Route path='products' element={<Protector user={user}>
          <Products 
            user={user}
            datas={datas} 
          />
          
         </Protector>} />
         <Route path='products/:productId' element={<SingleProduct user={user}/>}/>
         <Route path = "cart" element={<Cart/>}/>
         <Route path='*' element={<Error/>}/>
       </Route>
          
          
      </Routes>
    </>
  )
}

export default App
