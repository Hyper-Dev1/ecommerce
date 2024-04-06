import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Productgrid from "./Productgrid"

const Shop = ({ catname: propCatname }) => {
  const { catname: urlCatname } = useParams()
  const catname = propCatname || urlCatname

  const [products, setProducts] = useState([])
  const [categoryName, setCategoryName] = useState("") // Add state for category name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.7:3001/products/")
        let filteredProducts = response.data

        if (catname === undefined) {
          // Check if catname is undefined
          console.log("Printing all products") // Log that all products will be printed
          setProducts(filteredProducts)
          return // Exit early without applying any filters
        }

        if (catname === "trending") {
          filteredProducts = filteredProducts.sort((a, b) => b.Sold - a.Sold)
        } else if (catname === "latest") {
          filteredProducts = filteredProducts.sort(
            (a, b) => new Date(b.Updated) - new Date(a.Updated)
          )
        } else if (catname === "sale") {
          filteredProducts = filteredProducts.filter(
            (product) => product.Sale > 0
          )
        } else if (catname !== "category") {
          console.log(`Filtering products for category: ${catname}`) // Log the category being filtered
          filteredProducts = filteredProducts.filter(
            (product) => product.Category === catname
          )
        }
        setProducts(filteredProducts)

        setCategoryName(catname) // Set the category name
      } catch (error) {
        console.error("Error fetching product details:", error)
      }
    }

    fetchData()
  }, [catname])

  return (
    <>
      <div className="cat-hero">
        <div className="cat-hero-desc">
          {catname ? <h2>{catname}</h2> : <h2>Product Catalog</h2>}
          <div className="breadcrumbs">
            {catname ? (
              <p>
                Shop / <span>Category</span>
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
      {/* <Search /> */}
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

export default Shop
