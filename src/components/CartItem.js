import "../css/CartItem.css";

function CartItem() {
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={require("../imgs/items/pug_mug.png")} alt=""/>
      <div className="cart-item-name-and-amount">
        1 x Mug
      </div>
      <div className="cart-item-price">
        12 .99$
      </div>
    </div>
  );
}

export default CartItem;