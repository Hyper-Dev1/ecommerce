const Searchbar = () => {
  return (
    <div className="search">
      <div className="search-bar">
        <form action="">
          <img src="/Assets/search-normal-1.svg" alt="Search" />
          <input type="text" placeholder="Search..." name="search" />
          <button type="reset">
            <img src="/Assets/add.svg" alt="Search" />
          </button>
        </form>
      </div>
      <div className="search-suggestion">
        {/* <div className="suggestion-item">
          <img src="/Assets/search-normal-1.svg" alt="Search" />
          <p>Lorem</p>
        </div>
        <div className="suggestion-item">
          <img src="/Assets/search-normal-1.svg" alt="Search" />
          <p>Lorem</p>
        </div>
        <div className="suggestion-item">
          <img src="/Assets/search-normal-1.svg" alt="Search" />
          <p>Lorem</p>
        </div>
        <div className="suggestion-item">
          <img src="/Assets/search-normal-1.svg" alt="Search" />
          <p>Lorem</p>
        </div> */}
      </div>
    </div>
  )
}

export default Searchbar
