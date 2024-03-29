import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Maincard from "./Maincard"

const Productpage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [mainImage, setMainImage] = useState()
  const [value, setValue] = useState(1)

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProduct(response.data)
        setMainImage(response.data.Image1)
      })
      .catch((error) => {
        console.error("Error fetching product details:", error)
      })
  }, [id])
  console.log(product.Image1)
  const handleImageClick = (newImage) => {
    setMainImage(newImage)
  }
  const handleIncrement = () => {
    setValue((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (value > 1) {
      setValue((prevQuantity) => prevQuantity - 1)
    }
  }
  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setValue(newQuantity)
    }
  }
  return (
    <>
      <div className="breadcrumbs">
        <p>
          Shop / All Products / {product.Category} /{" "}
          <span>{product.ProductName}</span>
        </p>
      </div>
      <div className="product-card">
        <div className="product-image">
          <div className="main-image">
            <img src={mainImage} alt="Main Product" />
          </div>
          <div className="alter-image">
            {/* Render Image1 */}
            {product.Image1 && (
              <button onClick={() => handleImageClick(product.Image1)}>
                <img src={product.Image1} alt="Alternative Image 1" />
              </button>
            )}
            {/* Render Image2 */}
            {product.Image2 && (
              <button onClick={() => handleImageClick(product.Image2)}>
                <img src={product.Image2} alt="Alternative Image 2" />
              </button>
            )}
            {/* Render Image3 */}
            {product.Image3 && (
              <button onClick={() => handleImageClick(product.Image3)}>
                <img src={product.Image3} alt="Alternative Image 3" />
              </button>
            )}
            {/* Render Image4 */}
            {product.Image4 && (
              <button onClick={() => handleImageClick(product.Image4)}>
                <img src={product.Image4} alt="Alternative Image 4" />
              </button>
            )}
          </div>
        </div>
        <div className="product-desc">
          <h1>{product.ProductName}</h1>
          <p>{product.Category}</p>
          <h2>${product.Price}</h2>
          <p>
            H - <span>{product.Height}</span>cm W -{" "}
            <span>{product.Length}</span>cm B - <span>{product.Breadth}</span>cm
            <br />
            <br />
            {product.Description}
          </p>
          <div className="product-qty">
            <h2>QTY</h2>
            <button onClick={handleIncrement}>
              <img src="/Assets/add.svg" alt="" />
            </button>
            <input type="number" value={value} onChange={handleChange} />
            <button onClick={handleDecrement}>
              <img src="/Assets/minus.svg" alt="" />
            </button>
          </div>
          <div className="product-btn">
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="product-recommend">
        <h2>Recommended Product</h2>
        <div className="card-cont">
          <Maincard
            code={product.ProductCode}
            linkkey={id}
            name={product.ProductName}
            image={product.Image1}
            price={product.Price}
          />
        </div>
      </div>
    </>
  )
}

export default Productpage
