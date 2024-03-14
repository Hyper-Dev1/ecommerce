// import React from 'react'

const Category = () => {
  return (
    <>
      <div className="cat-hero">
        <div className="cat-hero-desc">
          <h2>Product Catalog</h2>
          <div className="breadcrumbs">
            <p>
              Shop / <span>Category</span>
            </p>
          </div>
        </div>
        <div className="cat-hero-img">
          <img
            src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
            alt=""
          />
        </div>
      </div>
      <div className="product-cont">
        {/* <div className="filter-container">
          <h2>Filter Products</h2>
          <div className="filter-option">
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home & Kitchen</option>
            </select>
          </div>
          <div className="filter-option">
            <label htmlFor="price">Price Range:</label>
            <input
              type="range"
              id="price"
              min="0"
              max="1000"
              step="10"
              value="0"
            />
            <span id="price-display">$0</span>
          </div>
          <div className="filter-option">
            <label htmlFor="color">Color:</label>
            <input type="checkbox" id="red" value="red" />
            <label htmlFor="red">Red</label>
            <input type="checkbox" id="blue" value="blue" />
            <label htmlFor="blue">Blue</label>
          </div>
          <button id="apply-filter">Apply Filter</button>
        </div> */}

        <div className="product-filter">
          <h2>Categories</h2>
          <ul>
            <li>Chairs</li>
            <li>Armchairs</li>
          </ul>
          
        </div>
        <div className="product-tile">
          <div className="product-hr-filter">
            <label htmlFor="sort">
              Sort as:
              <select name="sort" id="sort">
                <option value="popular">Popular</option>
                <option value="latest">Latest</option>
              </select>
            </label>
            <div className="product-viewas">
              <p>View as:</p>
              <button>
                <img src="./Assets/add.svg" alt="" />
              </button>
              <button>
                <img src="./Assets/add.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="product-item-cont">
            <div className="product-grid-view">
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
        </div>
      </div>
    </>
  )
}

export default Category
