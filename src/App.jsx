// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "./Components/Homepage"
// import Productpage from "./Components/Productpage"
// import Shipping from "./Components/Shipping"
// import Cart from "./Components/Cart"
// import Category from "./Components/Category"
import "./scss/app.scss"

function App() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <h1>Home Furniture</h1>
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">All Products</a>
            </li>
            <li>
              <a href="/">New Arrival</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <button>Profile</button>
          <button>Search</button>
          <button>Wishlist</button>
          <button>Cart</button>
        </div>
      </nav>
      <main>
        <Homepage />
        {/* <Productpage /> */}
        {/* <Shipping /> */}
        {/* <Cart /> */}
        {/* <Category /> */}
      </main>
      <footer>
        {/* <div className="newsletter">
          <div className="newsletter-info">
            <h3>Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut
              enim non, nemo optio, perspiciatis sit ipsa qui doloremque,
              quibusdam asperiores provident iusto nisi delectus quis in eaque!
              Eligendi, placeat.
            </p>
          </div>
          <form action="/">
            <input type="text" name="name" placeholder="Enter your name" />
            <input
              type="mail"
              name="email"
              placeholder="Enter your email address"
            />
            <button type="submit">Submit</button>
          </form>
        </div> */}
        <div className="footer-links">
          <p>&copy; Copyright Home Furniture 2023</p>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Catalog</a>
            </li>
            <li>
              <a href="/">All Products</a>
            </li>
            <li>
              <a href="/">New Arrival</a>
            </li>
            <li>
              <a href="/">Trending</a>
            </li>
          </ul>
          <div className="footer-socials">
            <button>Facebook</button>
            <button>Facebook</button>
            <button>Facebook</button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
