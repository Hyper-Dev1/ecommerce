import { Link, useParams } from "react-router-dom"
import Productgrid from "./Productgrid"
import Searchbar from "./Searchbar"
import { useEffect, useState } from "react"
import axios from "axios"

const Search = () => {
  const { search } = useParams()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products/")
        setProducts(response.data)
      } catch (error) {
        console.error("Error fetching product details:", error)
      }
    }
    fetchData()
  }, [])

  // Filter products based on search query
  useEffect(() => {
    if (search && products.length > 0) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts([])
    }
  }, [search, products])

  const catname = "hello"

  return (
    <>
      <div className="cat-hero">
        <div className="cat-hero-desc">
          <h2>{catname ? catname : "Product Catalog"}</h2>
          <div className="breadcrumbs">
            <p>
              Shop / <span>Category</span>
            </p>
          </div>
        </div>
        <div className="cat-hero-img">
          <img src="\Assets\img.png" alt="" />
        </div>
      </div>
      <Searchbar products={products} />
      <div className="product-cont">
        <div className="product-filter">
          <div className="category">
            <h2>Categories</h2>
            <ul>
              <li>
                <Link to="/shop/products/all">All Category</Link>
              </li>
              <li>
                <Link to="/shop/category/Chair">Chairs</Link>
              </li>
              <li>
                <Link to="/shop/category/Armchair">Armchairs</Link>
              </li>
              <li>
                <Link to="/shop/category/Sofa">Sofa</Link>
              </li>
              <li>
                <Link to="/shop/category/Lamp">Lamp</Link>
              </li>
              <li>
                <Link to="/shop/category/Textile">Textile</Link>
              </li>
              <li>
                <Link to="/shop/category/Bedroom">Bedroom</Link>
              </li>
              <li>
                <Link to="/shop/category/Mirror">Mirror</Link>
              </li>
              <li>
                <Link to="/shop/category/Decoration">Decoration</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-tile">
          {/* <div className="product-hr-filter">
            <label htmlFor="sort">
              Sort as:
              <select name="sort" id="sort">
                <option value="popular">Popular</option>
                <option value="latest">Latest</option>
              </select>
            </label>
            <div className="product-viewas">
              <p>View as:</p>
              <button>
                <img src="/Assets/add.svg" alt="" />
              </button>
              <button>
                <img src="/Assets/add.svg" alt="" />
              </button>
            </div>
          </div> */}
          <div className="product-item-cont">
            <Productgrid products={products} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
