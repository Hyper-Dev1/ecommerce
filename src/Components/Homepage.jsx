import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Salecard from "./Salecard"

const Homepage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://www.jsonblob.com/api/jsonblob/1238790362385735680")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
  }, [])
  const saleitem = products.filter((item) => item.Sale < 20).slice(0, 4)
  return (
    <main>
      <div className="hero">
        <div className="corousel-item">
          <div className="hero-img">
            <img src="\Assets\sofa img.png" alt="" />
          </div>
          <div className="hero-text">
            <h2>Comfortable Sofa with Great Comfort</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              consequuntur adipisci in, similique deleniti est reiciendis
              ducimus illum ipsum? Blanditiis tenetur illum, corporis iusto qui
              porro tempora non vero voluptates!
            </p>
            <button className="cta">
              <Link to="/shop/category/sofa">Shop Now</Link>
            </button>
          </div>
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
          <button className="cta">
            <Link to="/shop/products/sale">Explore</Link>
          </button>
        </div>
        <div className="sale-items">
          {saleitem.map((product) => (
            <Salecard
              key={product.id}
              linkkey={product.id}
              code={product.ProductCode}
              image={product.Image1}
              name={product.ProductName}
              price={product.Price}
              // cat={product.Category}
            />
          ))}
          {/* <Link to="/shop/product/id=23" className="card">
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
          </Link> */}
        </div>
      </div>
      <div className="popular">
        <h2>Popular</h2>
        <div className="popular-grid-cont">
          <Link to="/shop/category/Sofa" className="sofa">
            <img src="/Assets/category/sofa.jpg" alt="image" />
            <h3>Sofa</h3>
          </Link>
          <Link to="/shop/category/Bedroom" className="item-height bed">
            <img src="/Assets/category/bedroom.jpg" alt="image" />
            <h3>Bedroom</h3>
          </Link>
          <Link to="/shop/category/Lamp" className="item-height lamp">
            <img src="/Assets/category/lamp.jpg" alt="image" />
            <h3>Lamp</h3>
          </Link>
          <Link to="/shop/category/Armchair" className="item-height armchair">
            <img src="/Assets/category/armchair.jpg" alt="image" />
            <h3>Armchair</h3>
          </Link>
          <Link to="/shop/category/Chair" className="chair">
            <img src="/Assets/category/chair.jpg" alt="image" />
            <h3>Chair</h3>
          </Link>
          <Link to="/shop/category/Textile" className="item-height textile">
            <img src="/Assets/category/textile.jpg" alt="image" />
            <h3>Textile</h3>
          </Link>
          <Link to="/shop/category/Decoration" className="item-height decor">
            <img src="/Assets/category/decor.jpg" alt="image" />
            <h3>Decoration</h3>
          </Link>
          <Link to="/shop/category/Mirror" className="item-height mirror">
            <img src="/Assets/category/mirror.jpg" alt="image" />
            <h3>Mirror</h3>
          </Link>
        </div>
      </div>
      <hr />
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
    </main>
  )
}

export default Homepage
