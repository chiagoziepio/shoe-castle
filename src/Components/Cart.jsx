import '../ComponentCss/Cart.css'
import { Link } from 'react-router-dom'

const Cart = ({cartItems,handleProductDecrement,handleProductIncrement,handleCartclearance}) => {
  const totalPrice = cartItems.reduce((newPrice, item) => newPrice + item.quantity * item.newPrice, 0)
  return (
    <section className='cart'>
      <div className="empty-cart-list">
        {
        cartItems.length == 0 &&
        <div>
            <p>Empty cart</p>
        <Link to = '/products'>Back to the products page</Link>
        </div>
        
        }
      </div>
      <div className="cartproducts-container">
        {cartItems.length > 0 &&
          <div>
            {cartItems.map((item)=> (
            <div className='cartproduct' key={item.id} >
              <div className='cartproduct-first'>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className='cartproduct-img'
                  />
                  <div className="cartproduct-title">{item.title}</div>
              </div>
              <div className="cartproduct-btns">
                <span className='btn incrementBtn' onClick={()=> handleProductIncrement(item)}>+</span>
                <span className="btn decrementBtn" onClick={()=> handleProductDecrement(item)}>-</span>
              </div>
              <div className="cartproduct-quantity">
                <label >{item.quantity} = </label>
                <label >${item.quantity * item.newPrice}</label>
                
              </div>
              
            </div>
          ))}
          </div>
        }
        <div className="cart-totalPrice-cart-clearance">
          <div className="totalPrice">
            {cartItems.length > 0 && 
              <h3>Total price = ${totalPrice}</h3>
            }
            
          </div>
          {cartItems.length > 1 &&
            <button className="cart-clearanceBtn" onClick={handleCartclearance}>Clear cart</button>
          }
        </div>
        
      </div>
    </section>
  )
}

export default Cart