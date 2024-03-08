const Productpage = () => {
  return (
    <>
      <div className="breadcrumbs">
        <p>
          Shop / All Products / Bedroom / <span>Bed</span>
        </p>
      </div>
      <div className="product-card">
        <div className="product-image">
          <div className="main-image">
            <img src="/" alt="" />
          </div>
          <div className="alter-image">
            <button>
              <img src="/" alt="" />
            </button>
            <button>
              <img src="/" alt="" />
            </button>
            <button>
              <img src="/" alt="" />
            </button>
            <button>
              <img src="/" alt="" />
            </button>
          </div>
        </div>
        <div className="product-desc">
          <h1>Product Title</h1>
          <p>Category</p>
          <h2>$142</h2>
          <p>
            H - <span>25</span>cm W - <span>25</span>cm D - <span>25</span>cm{" "}
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            possimus quasi, neque consequuntur harum cupiditate distinctio magni
            quia, facere officia voluptates minima totam quam quisquam
            repudiandae qui tenetur a blanditiis. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Earum culpa cupiditate harum enim
            nisi hic adipisci explicabo nesciunt qui possimus veritatis libero,
            error esse deserunt aut a, ullam illo tenetur.
          </p>
          <div className="product-qty">
            <h2>QTY</h2>
            <button>
              <img src="./Assets/add.svg" alt="" />
            </button>
            <input type="number" />
            <button>
              <img src="./Assets/minus.svg" alt="" />
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
