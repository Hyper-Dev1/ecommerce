import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Maincard from "./Maincard"
import { useSelector, useDispatch } from "react-redux"
import {
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../State/slices"

const Productpage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [mainImage, setMainImage] = useState("")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    axios
      .get(`https://www.jsonblob.com/api/jsonblob/1262022017191632896`)
      .then((response) => {
        const filterProduct = response.data.products.filter((item) => id === item.id)
        setProduct(filterProduct[0])
        setMainImage(filterProduct[0].Image1)
      })
      .catch((error) => {
        console.error("Error fetching product details:", error)
      })
  }, [id])

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const wishlistItems = useSelector((state) => state.wishlist.items)

  const isProductInCart = cartItems.some((item) => item.id === id)
  const isProductInWishlist = wishlistItems.some((item) => item.id === id)

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...product, quantity }))
  }

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist(product))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(id))
  }

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(id))
  }

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }
  const handleImageClick = (newImage) => {
    setMainImage(newImage)
  }

  return product.Length > 0 ? (
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
            H - <span>{product.Height}</span>cm W -<span>{product.Length}</span>
            cm B - <span>{product.Breadth}</span>cm
            <br />
            <br />
            {product.Description}
          </p>
          <div className="product-qty">
            <h2>QTY</h2>
            <button onClick={handleIncrement}>
              <img src="/Assets/add.svg" alt="" />
            </button>
            <input type="number" value={quantity} onChange={handleChange} />
            <button onClick={handleDecrement}>
              <img src="/Assets/minus.svg" alt="" />
            </button>
          </div>
          <div className="product-btn">
            {isProductInCart ? (
              <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            ) : (
              <button onClick={handleAddToCart}>Add to cart</button>
            )}
            {isProductInWishlist ? (
              <button onClick={handleRemoveFromWishlist}>
                Remove from Wishlist
              </button>
            ) : (
              <button onClick={handleAddToWishlist}>Add to Wishlist</button>
            )}
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
  ) : (
    <>
      <h1>Loading..</h1>
    </>
  )
}

export default Productpage
