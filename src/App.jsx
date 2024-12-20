import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage"
import Productpage from "./Components/Productpage"
import Shipping from "./Components/Shipping"
import Cart from "./Components/Cart"
import Shop from "./Components/Shop"
import Wishlist from "./Components/Wishlist"
// import Search from "./Components/Search"
import { useSelector } from "react-redux"
import Blank from "./Components/Blank"
import { useState } from "react"

function App() {
  const [showNavigation, setNavigation] = useState(false)

  const cartItems = useSelector((state) => state.cart.items)
  const wishlistItems = useSelector((state) => state.wishlist.items)

  const handleNavigation = () => {
    showNavigation ? setNavigation(false) : setNavigation(true)
  }
  return (
    <>
      <Router scrollRestoration="false">
        <nav>
          <div className="nav-logo">
            <h1>
              <Link to="/">Home Furniture</Link>
            </h1>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop/products/all">All Products</Link>
              </li>
              <li>
                <Link to="/shop/products/trending">Trending</Link>
              </li>
              <li>
                <Link to="/shop/products/latest">New Arrival</Link>
              </li>
            </ul>
          </div>
          {showNavigation ? (
            <div className="nav-link-s" style={{ display: "block" }}>
              <div className="close-button">
                <button onClick={handleNavigation} className="">
                  <img height="32px" src="./Assets/close-circle.svg" alt="" />
                </button>
              </div>
              <ul>
                <li>
                  <Link to="/" onClick={() => setNavigation(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/products/all"
                    onClick={() => setNavigation(false)}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/products/trending"
                    onClick={() => setNavigation(false)}
                  >
                    Trending
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/products/latest"
                    onClick={() => setNavigation(false)}
                  >
                    New Arrival
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-link-s" style={{ display: "none" }}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop/products/all">All Products</Link>
                </li>
                <li>
                  <Link to="/shop/products/trending">Trending</Link>
                </li>
                <li>
                  <Link to="/shop/products/latest">New Arrival</Link>
                </li>
              </ul>
            </div>
          )}
          <div className="nav-buttons">
            <button>
              <Link to="/shop/products/all">
                <img src="/Assets/search-normal-1.svg" alt="Search" />
              </Link>
            </button>
            <button className="btn-badge">
              <Link to="/shop/cart">
                <img src="/Assets/bag.svg" alt="Cart" />
                <div className="badge-num">
                  <span>{cartItems.length}</span>
                </div>
              </Link>
            </button>
            <button className="btn-badge">
              <Link to="/shop/wishlist">
                <img src="/Assets/heart.svg" alt="Wishlist" />
                <div className="badge-num">
                  <span>{wishlistItems.length}</span>
                </div>
              </Link>
            </button>
            <button onClick={handleNavigation}>
              <Link to="/">
                <img src="/Assets/menu.svg" alt="Profile" />
              </Link>
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/cart" element={<Cart />} />
          {/* <Route path="/shop/search" element={<ShopRoutes  />} /> */}
          <Route path="/shop/wishlist" element={<Wishlist />} />
          <Route path="/shop/cart/shipping" element={<Shipping />} />
          <Route path="/shop/*" element={<ShopRoutes />} />
          <Route path="*" element={<Blank message="404 Not Found" />} />
          <Route
            path="/cart/checkout"
            element={<Blank message="Still in Development✨" />}
          />
          {/* <Route
            path="/shop/search"
            element={<Blank message="Still in Development✨" />}
          /> */}
        </Routes>

        <footer>
          <div className="footer-links">
            <p>&copy; Copyright Home Furniture 2023</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop/product">Catalog</Link>
              </li>
              <li>
                <Link to="/shop/product/all">All Products</Link>
              </li>
              <li>
                <a href="/">New Arrival</a>
              </li>
              <li>
                <a href="/">Trending</a>
              </li>
            </ul>
            <div className="footer-socials"></div>
          </div>
        </footer>
      </Router>
    </>
  )
}

const ShopRoutes = () => {
  return (
    <Routes>
      <Route path="/products/all" element={<Shop />} />
      <Route path="/products/trending" element={<Shop catname="trending" />} />
      <Route path="/products/sale" element={<Shop catname="sale" />} />
      <Route path="/products/latest" element={<Shop catname="latest" />} />
      <Route path="/product/:id" element={<Productpage />} />
      <Route path="/category/:catname" element={<Shop />} />
    </Routes>
  )
}

export default App
