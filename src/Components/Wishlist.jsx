import { useSelector, useDispatch } from "react-redux"
import { removeItemFromWishlist } from "../State/slices"
import Blank from "./Blank"
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  const dispatch = useDispatch()

  const removeItem = (itemId) => {
    return () => {
      dispatch(removeItemFromWishlist(itemId))
    }
  }

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
            <p> {wishlistItems.length} Items</p>
          </div>
          {/* <p className="cart-total">
            Total
            <span> $ {totalPrice.toFixed(2)}</span>
          </p> */}
        </div>
        <div>
          {!wishlistItems || wishlistItems.length === 0 ? (
            <div>
              <Blank message={"Your Wishlist is Empty"} />
            </div>
          ) : (
            <div className="cart-items-cont">
              {/* Iterate over cart items and display them */}
              {wishlistItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-heading">
                    <div className="cart-item-img">
                      <img src={item.Image1} alt={item.ProductName} />
                    </div>
                    <div className="cart-item-desc">
                      <h2>{item.ProductName}</h2>
                      <p>{item.Category}</p>
                    </div>
                  </div>
                  <div className="price">
                    <p>$ {item.Price}</p>
                  </div>
                  <div className="close">
                    <button onClick={removeItem(item.id)}>
                      <img src="/Assets/close-circle.svg" alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Wishlist
