import React from 'react'
import '../ComponentCss/Login.css'
import Layout from './Layout'
import{useNavigate} from 'react-router-dom'

const Login = ({name,setName,setUser}) => {
  const navigate = useNavigate()
  const handlepush = (e)=>{
    e.preventDefault();
    if(!name) return;
    setUser({name:name})
    navigate('/products')
    
  }

  
  return (
    <div>
      <h1>login</h1>
      <form >
        <input type="text" 
        placeholder='username'
        value = {name}
        onChange={(e)=> setName(e.target.value)}
        />
        <button type="submit" onClick={handlepush}>Submit</button>
      </form>
    </div>
  )
}

export default Login