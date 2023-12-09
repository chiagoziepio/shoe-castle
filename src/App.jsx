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
  const [cartItems, setCartItem] = useState([])
  const [search, setSearch] = useState("")
  const [searchOutcome, setSearchOutcome]= useState([])
  
  
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

 useEffect(()=>{
 
 const searchResult= datas.filter(data=>((data.title).toLowerCase()).includes(search.toLowerCase())  )
 setSearchOutcome(searchResult)
 
 },[datas,search])
  
 const handleAddToCart = (product)=>{
    const productExist = cartItems.find((item) => item.id === product.id );
    if(productExist) {
      setCartItem( cartItems.map((item)= item.id === product.id? {...productExist, quantity: productExist.quantity + 1}: item))
      
    } else{
      const newItem = {...product, quantity:1}
      const newCartItems = [...cartItems, newItem]
      setCartItem(newCartItems)
      
    }

 }
 const handleProductIncrement = (product)=>{
  const productExist = cartItems.find((item) => item.id === product.id);
  if(productExist){
    setCartItem(cartItems.map(item => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1}: item))

  }/* else{
    setCartItem([...cartItems, {...product, quantity: 1}])
  } */
 }
 const handleProductDecrement = (product)=>{
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quantity ===1){
      const deletedProduct = cartItems.filter((item) => item.id !== product.id);
      setCartItem(deletedProduct)
    }else{
      const decrementedProduct = cartItems.map(item => item.id === product.id? {...productExist, quantity: productExist.quantity - 1}: item)
      setCartItem(decrementedProduct)
    }
 }
 
  
  return (
    <>
    
      <Routes>
       <Route path='/' element={<Layout
          cartItems ={cartItems.length}
       />}>
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
            datas={searchOutcome} 
            handleAddToCart ={handleAddToCart}
            search={search}
            setSearch={setSearch}
          />
          
         </Protector>} />
         <Route path='products/:productId' element={<SingleProduct user={user}  />}/>
         <Route path = "cart" element={<Cart
            cartItems={cartItems}
            handleProductDecrement ={handleProductDecrement}
            handleProductIncrement ={handleProductIncrement}
         />}/>
         <Route path='*' element={<Error/>}/>
       </Route>
          
          
      </Routes>
    </>
  )
}

export default App
