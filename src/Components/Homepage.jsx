const Homepage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h2>Comfortable Sofa with Great Comfort</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            consequuntur adipisci in, similique deleniti est reiciendis ducimus
            illum ipsum? Blanditiis tenetur illum, corporis iusto qui porro
            tempora non vero voluptates!
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
      <div className="popular-grid-cont">
        <div className="sofa"></div>
        <div className="bed"></div>
        <div className="lamp"></div>
        <div className="armchair"></div>
        <div className="chair"></div>
        <div className="textile"></div>
        <div className="decor"></div>
        <div className="mirror"></div>
      </div>
    </>
  )
}

export default Homepage
