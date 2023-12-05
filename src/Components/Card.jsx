import '../ComponentCss/Card.css'
import { AiFillStar } from "react-icons/ai";

const Card = ({data}) => {
  return (
    <div className='card'>
      <img src={data.img} alt="" />
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
      <button className= "product-btn">Add to cart</button>
    </div>
  )
}

export default Card