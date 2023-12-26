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
  /* this set is made live, json server link has been changed to point to the online server. the local server was deployed to render. The API_URL is the link for when it was still in the deveeloopment stage,while product_Server is for the production link */
  const Product_Server = "https://server-ztr9.onrender.com/products"
  const [user, setUser] = useState(null);
  const [name,  setName] = useState("");
  const [email, setEmail] = useState("")
  const [datas, setDatas] = useState([])
  const [cartItems, setCartItem] = useState([])
  const [search, setSearch] = useState("")
  const [searchOutcome, setSearchOutcome]= useState([])
 
  
  /* gettting our data from the the backend api */
 useEffect(()=>{
  const fetchProducts = async()=>{
    try{
      const response = await fetch(Product_Server);
      if(!response.ok) throw Error("did not recieve expected data")
      const data = await response.json();
     
      setDatas(data);
      
    }catch(Error){
      console.log(`Error ${Error}`);
    }

  }
  fetchProducts()
 },[])
/* for input search filtering */
 useEffect(()=>{
 
 const searchResult= datas.filter(data=>((data.title).toLowerCase()).includes(search.toLowerCase())  )
 setSearchOutcome(searchResult)
 
 },[datas,search])
  
 /* button filtering */
 const handleBtnClick =  (e)=>{
   const elementValue = e.target.value;
   if(elementValue === "all") return setSearchOutcome(datas);
   const result = datas.filter(data => (data.company).toLowerCase() === elementValue.toLowerCase() )
   setSearchOutcome(result)
   
    
 }
 /* radio filtering */
 const handleRadioClick=(e)=>{
    const elementValue = e.target.value;
    if(elementValue === "all") return setSearchOutcome(datas);
   const result = datas.filter(data => (data.category).toLowerCase() === elementValue.toLowerCase() || (data.newPrice).toLowerCase() === elementValue.toLowerCase() || (data.color).toLowerCase() === elementValue.toLowerCase() )
   setSearchOutcome(result)
 }
 /* cart clearance */
 const handleCartclearance = ()=>{
  setCartItem([])
 }
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
            handleBtnClick={handleBtnClick}
            handleRadioClick={handleRadioClick}
          />
          
         </Protector>} />
         <Route path='products/:productId' element={<SingleProduct datas={datas}  />}/>
         <Route path = "cart" element={<Cart
            cartItems={cartItems}
            handleProductDecrement ={handleProductDecrement}
            handleProductIncrement ={handleProductIncrement}
            handleCartclearance={handleCartclearance}
         />}/>
         <Route path='*' element={<Error/>}/>
       </Route>
          
          
      </Routes>
    </>
  )
}

export default App
