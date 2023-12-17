import '../ComponentCss/Buttons.css'

const Buttons = ({search,setSearch,handleBtnClick}) => {
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
          <button type="button" className='recommended-btns-btn'onClick={handleBtnClick} value={"all"}>All</button>
          <button type="button" className='recommended-btns-btn'onClick={handleBtnClick}value={"adidas"}>Adidas</button>
          <button type="button" className='recommended-btns-btn'onClick={handleBtnClick}value={"nike"}>Nike</button>
          <button type="button" className='recommended-btns-btn'onClick={handleBtnClick}value={"vans"}>Vans</button>
          <button type="button" className='recommended-btns-btn'onClick={handleBtnClick}value={"puma"}>Puma</button>
          
        </div>
    </>
  )
}

export default Buttons