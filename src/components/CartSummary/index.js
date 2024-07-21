// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const amount = cartList.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0,
      )
      console.log(amount)

      const cartLength = cartList.length
      console.log(cartLength)

      return (
        <div className="cart-summary-card">
          <div className="orders-card">
            <h1 className="order-text">
              Order Total: <span className="rs-text">Rs {amount}/-</span>
            </h1>
            <p className="items-count">{cartLength} Items in cart</p>
          </div>
          <button className="check-out-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
