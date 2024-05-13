import { Link } from "react-router-dom"
import Blank from "./Blank"

const Productgrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <>
        <h1>No Product Avaibale</h1>
      </>
    ) // Or any loading indicator you prefer
  }
  return (
    <div className="product-grid-view">
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/shop/product/${product.id}`}
          className="main-card-cont"
        >
          <div className="main-card">
            <div className="card-img">
              <img src={product.Image1} alt={product.ProductName} />
            </div>
            <div className="card-desc">
              <h3>{product.ProductName}</h3>
              <p>$ {product.Price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Productgrid
