import { Link } from "react-router-dom"

const Maincard = ({ linkkey, name, image, price }) => {
  return (
    <Link
      to={`/shop/product/${linkkey}`}
      className="main-card-cont"
      key={linkkey}
    >
      <div className="main-card">
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

export default Maincard
