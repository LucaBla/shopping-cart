import "../css/CartItem.css";
import "../App.css";
import { Link } from "react-router-dom";
import items from "../Items.js";

function CartItem(props) {
  let item = items[props.id];

  function removeItem(){
    let newCart = {...props.cart};
    delete newCart[props.id];
    props.setCart(newCart);
  }

  return (
    <Link to={"/shop/" + props.id}>
      <div className="cart-item">
        <img className="cart-item-img" src={require("../imgs/items/" + item.img)} alt=""/>
        <div className="cart-item-name-and-amount">
          {props.itemAmount} x {item.name}
        </div>
        <div className="cart-item-remove">
          <div className="cart-item-remove-btn-wrapper">
            <button onClick={()=> removeItem()}>Remove</button>
          </div>
        </div>
        <div className="cart-item-price number">
          {(item.price * props.itemAmount).toFixed(2)}$
        </div>
      </div>
    </Link>
  );
}

export default CartItem;