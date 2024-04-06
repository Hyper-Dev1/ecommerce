import { Link } from "react-router-dom"

const Shipping = () => {
  return (
    <>
      <div className="breadcrumbs">
        <p>
          Shop / Cart / <span>Shipping Info</span>
        </p>
      </div>
      <div className="shipping">
        <h2>Shipping Info</h2>
        <hr />
        <div className="form-section">
          <input type="text" name="first name" placeholder="First name" />
          <input type="text" name="last name" placeholder="Last name" />
          <input type="number" name="text" placeholder="Contact number" />
          <input type="address" name="address" placeholder="Street address" />
          <input type="text" name="city" placeholder="City" />
          <input type="number" name="zip code" placeholder="Zip code" />
          <input type="text" name="state" placeholder="State" />
          <input type="text" name="Country" placeholder="Country" />
        </div>
        <div className="btn-section">
          <Link to="/shop/products/all">
            <button className="non-focus-btn">Continue Shopping</button>
          </Link>
          <Link to="/cart/checkout">
            <button className="cta-page">Procced to Checkout</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Shipping
