import './SearchNews.css'

function SearchNews({ setSearch }) {

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <section className='search-news'>
      <label htmlFor='search' ></label>
      <input 
        id='search'
        className='input-field'
        type='text'
        placeholder='Search News...'
        onChange={handleSearch}
      />
    </section>
  )
}

export default SearchNews;