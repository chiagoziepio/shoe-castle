import React from 'react'
import '../ComponentCss/Login.css'
import Layout from './Layout'
import{useNavigate} from 'react-router-dom'

const Login = ({name,setName,setUser,email,setEmail}) => {
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name || !email) return;
    setUser(name)
    navigate('/products')
    setName("")
    setEmail("")
  }

  
  return (
    <div className='login'>
      <div className="loginBx">
          <h2>login</h2>
          <form >
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input type="text" 
              placeholder='username'
              value = {name}
              onChange={(e)=> setName(e.target.value)}
              id='username'
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input 
                type="password"  
                id="password" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='password'
              />
            </div>
            
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
      </div>
      
    </div>
  )
}

export default Login