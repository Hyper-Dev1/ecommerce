import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Salecard from "./Salecard"
import Maincard from "./Maincard"

const Productpage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => {
        console.error("Error fetching product details:", error)
      })
  }, [id])
  console.log(product)
  // const mainimg = (pro)
  const [mainImage, setMainImage] = useState(product.Image1)
  const handleImageClick = (newImage) => {
    setMainImage(newImage)
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
            <button
              onClick={() => handleImageClick(product.Image2)}
            >
              <img
                src={product.Image2}
                alt="Alternative Image 1"
              />
            </button>
            <button
              onClick={() => handleImageClick("/path/to/alternate-image2.jpg")}
            >
              <img
                src="/path/to/alternate-image2.jpg"
                alt="Alternative Image 2"
              />
            </button>
            <button
              onClick={() => handleImageClick("/path/to/alternate-image3.jpg")}
            >
              <img
                src="/path/to/alternate-image3.jpg"
                alt="Alternative Image 3"
              />
            </button>
            {/* Add more buttons for additional alternative images */}
          </div>
        </div>
        <div className="product-desc">
          <h1>{product.ProductName}</h1>
          <p>{product.Category}</p>
          <h2>${product.Price}</h2>
          <p>
            H - <span>{product.Height}</span>cm W - <span>{product.Length}</span>cm B - <span>{product.Breadth}</span>cm
            <br />
            <br />
            {product.Description}
          </p>
          <div className="product-qty">
            <h2>QTY</h2>
            <button>
              <img src="/Assets/add.svg" alt="" />
            </button>
            <input type="number" />
            <button>
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
          <Maincard code={product.ProductCode} linkkey={id} name={product.ProductName} image={product.Image1} price={product.Price} />
          <a href="/" className="main-card-cont">
            <div className="main-card">
              <div className="card-img">
                <img
                  src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                  alt=""
                />
              </div>
              <div className="card-desc">
                <h3>Product Name</h3>
                <p>Rs 000</p>
              </div>
            </div>
          </a>
          <a href="/" className="main-card-cont">
            <div className="main-card">
              <div className="card-img">
                <img
                  src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                  alt=""
                />
              </div>
              <div className="card-desc">
                <h3>Product Name</h3>
                <p>Rs 000</p>
              </div>
            </div>
          </a>
          <a href="/" className="main-card-cont">
            <div className="main-card">
              <div className="card-img">
                <img
                  src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                  alt=""
                />
              </div>
              <div className="card-desc">
                <h3>Product Name</h3>
                <p>Rs 000</p>
              </div>
            </div>
          </a>
          <a href="/" className="main-card-cont">
            <div className="main-card">
              <div className="card-img">
                <img
                  src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                  alt=""
                />
              </div>
              <div className="card-desc">
                <h3>Product Name</h3>
                <p>Rs 000</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Productpage
