import '../ComponentCss/SingleProduct.css'
import {useParams} from 'react-router-dom'


const SingleProduct = ({datas}) => {
  const theProduct = datas;
  const { productId } = useParams();
 
  const product = theProduct.find((product) => (product.id).toString() === productId )
  
  const {img,title} = product;
  return (<>
    <div className='singleproduct'>
      
      <div className="singleproducts-details">
        <div className="singleproducts-image">
          <img src={img} alt={title} />
        </div>
        
        <h3>{title}</h3>
      </div>
      
      
    </div>
    
    </>
  )
}

export default SingleProduct