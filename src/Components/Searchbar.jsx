import { useState } from "react"
import axios from "axios"

const Searchbar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const handleChange = (event) => {
    const { value } = event.target
    setSearchValue(value)
    fetchSuggestions(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Call the onSearch callback function with the search value
    onSearch(searchValue)
    setSuggestions([])
  }
  
  const handleClear = () => {
    setSearchValue("")
    setSuggestions([])
  }

  const fetchSuggestions = async (query) => {
    try {
      if (query.length < 2) {
        setSuggestions([])
        return
      }
      const response = await axios.get("http://localhost:3001/products/")
      // Filter the suggestions based on the productName property
      const filteredSuggestions = response.data.filter((item) =>
        item.ProductName.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filteredSuggestions.map((item) => item.ProductName))
    } catch (error) {
      console.error("Error fetching suggestions:", error)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion)
    setSuggestions([])
    onSearch(suggestion)
  }

  return (
    <div className="searchBar">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="search-box">
            <img src="/Assets/search-normal-1.svg" alt="Search" />
            <input
              type="text"
              placeholder="Search..."
              name="search"
              value={searchValue}
              onChange={handleChange}
            />
            <button type="reset" onClick={handleClear}>
              <img src="/Assets/add.svg" alt="Search" />
            </button>
          </div>
        </form>
      </div>
      {suggestions.length > 0 && (
        <div className="search-suggestion">
          {suggestions.slice(0, 6).map((item, index) => (
            <div
              className="suggestion-item"
              onClick={() => handleSuggestionClick(item)}
              key={index}
            >
              <img src="/Assets/search-normal-1.svg" alt="Search" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Searchbar
