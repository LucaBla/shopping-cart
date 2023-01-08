import "../css/OrderItem.css";
import "../App.css";
import { Link } from "react-router-dom";
import items from "../Items.js";

function OrderItem(props) {
  let item = items[props.id];

  return (
      <div className="order-item">
        <img className="order-item-img" src={require("../imgs/items/" + item.img)} alt=""/>
        <div className="order-item-name-and-amount">
          {props.itemAmount} x {item.name}
        </div>
        <div className="cart-item-price number">
          {(item.price * props.itemAmount).toFixed(2)}$
        </div>
      </div>
  );
}

export default OrderItem;