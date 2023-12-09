import '../ComponentCss/Buttons.css'

const Buttons = ({search,setSearch}) => {
  return (
    <>
      <div className="input-search-container">
        <input 
          type="text"
          placeholder='search'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          />
      </div>
        <div className='recommended-btns'>
          <h3 className='recommended-title'>Recommended</h3>
          <button type="button" className='recommended-btns-btn'>All</button>
          <button type="button" className='recommended-btns-btn'>Addidas</button>
          <button type="button" className='recommended-btns-btn'>Nike</button>
          <button type="button" className='recommended-btns-btn'>Vans</button>
          <button type="button" className='recommended-btns-btn'>Puma</button>
        </div>
    </>
  )
}

export default Buttons