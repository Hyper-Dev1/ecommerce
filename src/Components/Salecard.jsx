import { Link } from "react-router-dom"

const Salecard = ({ code, linkkey, name, image, price }) => {
  return (
    <Link to={`/shop/product/${linkkey}`} className="card" key={code}>
      <div className="card-cont">
        <div className="card-img">
          <img src={image} alt={name} />
        </div>
        <div className="card-desc">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  )
}

export default Salecard
