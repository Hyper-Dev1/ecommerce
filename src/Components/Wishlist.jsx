
const Wishlist = () => {
    return (
      <>
        <div className="breadcrumbs">
          <p>
            Shop / <span>Wishlist</span>
          </p>
        </div>
        <div className="cart">
          <div className="cart-heading">
            <div className="heading-title">
              <h1>Your Wishlist </h1>
              <p>3 Items</p>
            </div>
            <p className="cart-total">
              Total
              <span> $ 120</span>
            </p>
          </div>
          <div className="cart-items-cont">
            <div className="cart-item">
              <div className="cart-item-heading">
                <div className="cart-item-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt=""
                  />
                </div>
                <div className="cart-item-desc">
                  <h2>Product Item</h2>
                  <p>Category</p>
                </div>
              </div>
              <div className="cart-qty">
                <h2>QTY</h2>
                <button>
                  <img src="./Assets/add.svg" alt="" />
                </button>
                <input type="number" name="qty" id="" value={1} />
                <button>
                  <img src="./Assets/minus.svg" alt="" />
                </button>
              </div>
              <div className="price">
                <p>$ 40</p>
              </div>
              <div className="close">
                <img src="/" alt="" />
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-item-heading">
                <div className="cart-item-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt=""
                  />
                </div>
                <div className="cart-item-desc">
                  <h2>Product Item</h2>
                  <p>Category</p>
                </div>
              </div>
              <div className="cart-qty">
                <h2>QTY</h2>
                <button>
                  <img src="./Assets/add.svg" alt="" />
                </button>
                <input type="number" name="qty" id="" value={1} />
                <button>
                  <img src="./Assets/minus.svg" alt="" />
                </button>
              </div>
              <div className="price">
                <p>$ 40</p>
              </div>
              <div className="close">
                <img src="/" alt="" />
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-item-heading">
                <div className="cart-item-img">
                  <img
                    src="https://pluspng.com/img-png/furniture-png-chair-png-transparent-image-1096.png"
                    alt=""
                  />
                </div>
                <div className="cart-item-desc">
                  <h2>Product Item</h2>
                  <p>Category</p>
                </div>
              </div>
              <div className="cart-qty">
                <h2>QTY</h2>
                <button>
                  <img src="./Assets/add.svg" alt="" />
                </button>
                <input type="number" name="qty" id="" value={1} />
                <button>
                  <img src="./Assets/minus.svg" alt="" />
                </button>
              </div>
              <div className="price">
                <p>$ 40</p>
              </div>
              <div className="close">
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Wishlist
  