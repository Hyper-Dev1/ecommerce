import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateCartItemQuantity, removeItemFromCart } from "../State/slices"
import { Link } from "react-router-dom"
import Blank from "./Blank"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0
    cartItems.forEach((item) => {
      price += item.Price * item.quantity
    })
    setTotalPrice(price)
  }, [cartItems])

  const handleQuantityChange = (itemId, qty) => {
    dispatch(updateCartItemQuantity({ id: itemId, quantity: qty }))
  }
  const removeItem = (itemId) => {
    return () => {
      dispatch(removeItemFromCart(itemId))
    }
  }

  const handleIncrement = (item, qty) => {
    qty = qty + 1
    handleQuantityChange(item.id, qty)
  }

  const handleDecrement = (item, qty) => {
    if (qty > 1) {
      qty = qty - 1
      handleQuantityChange(item.id, qty)
    }
  }

  return (
    <>
      <div className="breadcrumbs">
        <p>
          Shop / <span>Cart</span>
        </p>
      </div>
      <div className="cart">
        <div className="cart-heading">
          <div className="heading-title">
            <h1>Your Cart </h1>
            <p> {cartItems.length} Items</p>
          </div>
          <p className="cart-total">
            Total
            <span> $ {totalPrice.toFixed(2)}</span>
          </p>
        </div>
        <div>
          {!cartItems || cartItems.length === 0 ? (
            <div>
              <Blank message={"Your Cart is Empty"} />
            </div>
          ) : (
            <div>
              <div className="cart-items-cont">
                {/* Iterate over cart items and display them */}
                {cartItems.map((item) => (
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
                    <div className="cart-qty">
                      <h2>QTY</h2>
                      <button
                        onClick={() => handleIncrement(item, item.quantity)}
                      >
                        {/* Add button to increase quantity */}
                        <img src="/Assets/add.svg" alt="" />
                      </button>
                      <input
                        type="number"
                        name="qty"
                        id=""
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        // readOnly // Make the input readOnly
                      />
                      <button
                        onClick={() => handleDecrement(item, item.quantity)}
                      >
                        {/* Add button to decrease quantity */}
                        <img src="/Assets/minus.svg" alt="" />
                      </button>
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
              <div className="checkout">
                <Link to="/shop/cart/shipping">
                  <button>Checkout</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
