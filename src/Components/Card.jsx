import '../ComponentCss/Card.css'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Card = ({data, handleAddToCart}) => {
  return (
    <div className='card_items'>
      <Link to={`/products/${data.id}`}>
        <img src={data.img} alt="" />
      </Link>
      
      <div className="product-details">
        <h3 className="product-title">{data.title}</h3>
        <div className="product-reviews">
          <AiFillStar className='star'/>
          <AiFillStar className='star'/>
          <AiFillStar className='star'/>
          
        </div>
        <div className="product-price">
          <del>{data.prevPrice}</del><span className='product-newprice'>{data.newPrice}</span>
        </div>
        
      </div>
      <button onClick={()=> handleAddToCart(data)} className= "product-btn">Add to cart</button>
    </div>
  )
}

export default Card