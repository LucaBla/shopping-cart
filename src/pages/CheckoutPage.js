import "../css/CheckoutPage.css";
import OrderItem from "../components/OrderItem";
import items from "../Items";
import { useEffect, useState } from "react";

function CheckoutPage(props) {
  const [order, setOrder] = useState(props.cart);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.setCart({});
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="checkout">
      <h2>Thank you for trusting us!</h2>
      <h3>Your Order:</h3>
      <div className="order-item-list">
        {Object.keys(order).map((id, i) => {
            return(
              <OrderItem key={i} id={id} itemAmount={order[id]}></OrderItem>
            )
          })}
      </div>
      <div className="order-total number">
        Total: {Object.keys(order).reduce((acc, key) => 
                        acc + (order[key] * parseFloat(items[key].price)), 0).toFixed(2)}
                $
      </div>
    </div>
  );
}

export default CheckoutPage;