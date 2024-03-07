import "./scss/app.scss"

function App() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <h1>Home Furniture</h1>
          {/* <img src="./vite.svg" alt="" /> */}
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
        <div className="hero">
          <div className="hero-text">
            <h2>Comfortable Sofa with Great Comfort</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              consequuntur adipisci in, similique deleniti est reiciendis
              ducimus illum ipsum? Blanditiis tenetur illum, corporis iusto qui
              porro tempora non vero voluptates!
            </p>
            <button className="cta">Shop Now</button>
          </div>
          <div className="hero-img">
            <img
              src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
              alt=""
            />
          </div>
        </div>
        <div className="sale-items-cont">
          <div className="sale-text">
            <h2>
              <span>On Sale</span>
              <br />
              Up to 20% Off
            </h2>
            <hr />
            <p>Our entire October collection</p>
            <button className="cta">Explore</button>
          </div>
          <div className="sale-items">
            <a href="/" className="card">
              <div className="card-cont">
                <div className="card-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt="Product Image"
                  />
                </div>
                <div className="card-desc">
                  <h3>Product Name</h3>
                  <p>Rs 00000</p>
                </div>
              </div>
            </a>
            <a href="/" className="card">
              <div className="card-cont">
                <div className="card-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt="Product Image"
                  />
                </div>
                <div className="card-desc">
                  <h3>Product Name</h3>
                  <p>Rs 00000</p>
                </div>
              </div>
            </a>
            <a href="/" className="card">
              <div className="card-cont">
                <div className="card-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt="Product Image"
                  />
                </div>
                <div className="card-desc">
                  <h3>Product Name</h3>
                  <p>Rs 00000</p>
                </div>
              </div>
            </a>
            <a href="/" className="card">
              <div className="card-cont">
                <div className="card-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt="Product Image"
                  />
                </div>
                <div className="card-desc">
                  <h3>Product Name</h3>
                  <p>Rs 00000</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className="newsletter">
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
        </div>
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
