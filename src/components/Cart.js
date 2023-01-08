import "../css/Cart.css";
import "../App.css";
import CartItem from "./CartItem";
import { Link, useLocation } from "react-router-dom";
import items from "../Items.js";

function Cart(props) {
  let total = Object.keys(props.cart).reduce((acc, key) => 
              acc + (props.cart[key] * parseFloat(items[key].price)), 0).toFixed(2);

  function handleClick(e){
    if(total <= 0){
      e.preventDefault();
    }
  }

  if(useLocation().pathname === '/'){
    return(
      <div></div>
    );
  }
  else{
    return (
      <div className="cart-wrapper" onMouseLeave={() => props.setIsCartOpen(!props.isCartOpen)}>
        <div className="cart">
          <div className="cart-header">
            <div className="cart-total">
              <h3>Total:</h3>
              <div className="total-price number">
                {total}$
              </div>
            </div>
            <div className="checkout-btn-wrapper">
              <Link className={total <= 0 ? 'disabled' : ''} to='/checkout' 
                    onClick={(e) =>  handleClick(e)}>
                Checkout
              </Link>
            </div>
          </div>
          <div className="cart-item-grid">
          {Object.keys(props.cart).map((id, i) => {
            return(
              <CartItem key={i} id={id} itemAmount={props.cart[id]} 
                        cart={props.cart} 
                        setCart={props.setCart}></CartItem>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;