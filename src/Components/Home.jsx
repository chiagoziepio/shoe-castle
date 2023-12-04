import '../ComponentCss/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <div className="action">
        <p className='action-text'>A journey of a thousand miles starts with a step but will definitely feel better if that that step is taken in a nice comfortable and durable Shoe <br /><span>Shop Castle</span> boosts of five of efficiently making sure you are addressed as a nobleman because as they say.... <br /> <label  className='action-text_quote'> <span>"</span>you are addressed the way you dress<span>"</span></label></p>
        
        <button className="action-btn"><Link to ="/products" className='btn-link'>Shop now</Link></button>

      </div>
        <div className="action-img">
          <img src="img/shoe_hero.jpg" alt="shoe_img" />
        </div>
    </section>
  )
}

export default Home