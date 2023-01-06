import "../css/Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart-wrapper">
      <div className="cart">
        <div className="cart-header">
          <div className="cart-total">
            <h3>Total:</h3>
            <div>120 .99$</div>
          </div>
          <div className="checkout-btn-wrapper">
            <Link to='/checkout'>Checkout</Link>
          </div>
        </div>
        <div className="cart-item-grid">
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
          <CartItem></CartItem>
        </div>
      </div>
    </div>
  );
}

export default Cart;