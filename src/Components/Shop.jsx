import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Productgrid from "./Productgrid"
// import Search from "./Search"
import Searchbar from "./Searchbar"

const Shop = ({ catname: propCatname }) => {
  const { catname: urlCatname } = useParams()
  const catname = propCatname || urlCatname

  const [products, setProducts] = useState([])
  const [categoryName, setCategoryName] = useState("")
  const [searchValue, setSearchValue] = useState("") // Step 1: Add state for search value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.jsonblob.com/api/jsonblob/1238790362385735680")
        let filteredProducts = response.data
        console.log(catname)

        // Check if catname is undefined or matches predefined categories
        if (
          !catname ||
          ["trending", "latest", "sale", "category"].includes(catname)
        ) {
          // Apply category-based filters
          if (catname === "trending") {
            filteredProducts = filteredProducts.sort((a, b) => b.Sold - a.Sold)
            console.log("catnamesold")
          } else if (catname === "latest") {
            filteredProducts = filteredProducts.sort(
              (a, b) => new Date(b.Updated) - new Date(a.Updated)
            )
            console.log("catnamelatest")
          } else if (catname === "sale") {
            filteredProducts = filteredProducts.filter(
              (product) => product.Sale > 0
            )
            console.log("catnamesle")
          } else if (catname && catname !== "category") {
            filteredProducts = filteredProducts.filter(
              (product) => product.Category === catname
            )
            console.log("catname2")
          }
        } else {
          filteredProducts = filteredProducts.filter(
            (product) => product.Category === catname
          )
          console.log("catname")
        }

        // Apply search filter if searchValue is available
        if (searchValue) {
          filteredProducts = filteredProducts.filter((product) =>
            product.ProductName.toLowerCase().includes(
              searchValue.toLowerCase()
            )
          )
          console.log(searchValue);
        }

        setProducts(filteredProducts)
        setCategoryName(catname)
      } catch (error) {
        console.error("Error fetching product details:", error)
      }
    }

    fetchData()
  }, [catname, searchValue]) // Step 4: Trigger fetchData when catname or searchValue changes

  // Step 2: Pass a function to handle search value changes
  const handleSearch = (value) => {
    setSearchValue(value)
  }
  return (
    <>
      <div className="cat-hero">
        <div className="cat-hero-desc">
          {categoryName ? <h2>{categoryName}</h2> : <h2>All Products</h2>}
          <div className="breadcrumbs">
            {categoryName ? (
              <p>
                Shop / Category / <span>{categoryName}</span>
              </p>
            ) : (
              <p>
                Shop / <span>Category</span>
              </p>
            )}
          </div>
        </div>
        <div className="cat-hero-img">
          {/* <img
            src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
            alt=""
          /> */}
          <img src="\Assets\img.png" alt="" />
        </div>
      </div>
      <Searchbar onSearch={handleSearch} />
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
      <div style= {{display:'none'}}>
        <h1>fahsdkf</h1>
      </div>
    </>
  )
}

export default Shop
