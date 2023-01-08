import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Notification from "../components/Notification";
import items from "../Items.js";
import "../css/ItemPage.css";
import "../App.css";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function ItemPage(props) {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [itemAmount, setItemAmount] = useState(1);

  let { id } = useParams();
  let item = items[id];

  function handleAddToCart(){
    if(itemAmount <= 0){
      return;
    }
    let newCart = {...props.cart};
    if(newCart[id]){
      newCart[id]+= itemAmount;
    }
    else{
      newCart[id] = itemAmount;
    }
    props.setCart(newCart);
    setIsItemAdded(true);
  }

  useEffect(() => {
    if(isItemAdded){
      const timeout = setTimeout(() => {
        document.getElementsByClassName('notification-wrapper')[0].classList.add('denotify');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isItemAdded]);

  useEffect(() => {
    if(isItemAdded){
      const timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [isItemAdded]);


  return (
    <div className="item-page">
      {isItemAdded &&
        <Notification itemName={item.name} itemAmount={itemAmount}>Hallo</Notification>
      }
      <div className="item-page-content">
        <div className="img-wrapper">
          <img className="item-page-img" src={require("../imgs/items/" + item.img)} alt=""/>
        </div>
        <div className="item-name-price">
          <h2>{item.name}</h2>
          <div className="price-and-buy number">
          {item.price}$
          x
          <input type="number" value={itemAmount || ''} onInput={e => setItemAmount(parseInt(e.target.value)) || 0}></input>
          <div className="buy-btn-wrapper">
            <button onClick={handleAddToCart}>
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
          </div>
        </div>
        <div className="item-overview">
        <h3>Overview:</h3>
        <ul>
          {item.overview.map((point) =>{
            return <li key={point}>{point}</li>
          })}
        </ul>
        </div>
        <div className="item-description">
          <h3>Description:</h3>
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default ItemPage;