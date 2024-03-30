import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage"
import Productpage from "./Components/Productpage"
// import Shipping from "./Components/Shipping"
import Cart from "./Components/Cart"
import Category from "./Components/Category"
import "./scss/app.scss"
import Wishlist from "./Components/Wishlist"
import Search from "./Components/Search"

function App() {
  return (
    <>
      <Router scrollRestoration="false">
        <nav>
          <div className="nav-logo">
            <h1>Home Furniture</h1>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop/product/all">All Products</Link>
              </li>
              <li>
                <Link to="/shop/product/trending">Trending</Link>
              </li>
              <li>
                <Link to="/shop/product/latest">Latest</Link>
              </li>
            </ul>
          </div>
          <div className="nav-buttons">
            <button>
              <Link to="/shop/cart">
                <img src="/Assets/bag.svg" alt="Cart" />
              </Link>
            </button>
            <button>
              <Link to="/">
                <img src="/Assets/profilec.svg" alt="Profile" />
              </Link>
            </button>
            <button>
              <Link to="/shop/search">
                <img src="/Assets/search-normal-1.svg" alt="Search" />
              </Link>
            </button>
            <button>
              <Link to="/shop/wishlist">
                <img src="/Assets/heart.svg" alt="Wishlist" />
              </Link>
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/shop/category" Component={Category} />
          <Route path="/shop/product/all" Component={Category} />
          <Route path="/shop/cart" Component={Cart} />
          <Route path="/shop/search" Component={Search} />
          <Route path="/shop/wishlist" Component={Wishlist} />
          <Route path="/shop/product/:id" Component={Productpage} />
          <Route path="/shop/sale" Component={Category} />
          <Route path="/shop/category/:catname" Component={Category} />
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

export default App
