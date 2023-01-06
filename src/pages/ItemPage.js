import { useParams } from "react-router-dom";
import Header from "../components/Header";
import items from "../Items.js";
import "../css/ItemPage.css";
import Footer from "../components/Footer";

function ItemPage() {

  let { id } = useParams();
  let item = items[id];

  return (
    <div className="item-page">
      <Header></Header>
      <div className="item-page-content">
        <div className="img-wrapper">
          <img className="item-page-img" src={require("../imgs/items/" + item.img)} alt=""/>
        </div>
        <div className="item-name-price">
          <h2>{item.name}</h2>
          <div className="price-and-buy">
          {item.price}$
          <div className="buy-btn-wrapper">
            <button>
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
      <Footer></Footer>
    </div>
  );
}

export default ItemPage;