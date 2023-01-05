import "../css/ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard(props) {
  return (
    <div className="item-card">
      <Link to={"/shop/" + props.id}>
        <img className="item-img" src={require("../imgs/items/" + props.img)} alt=""/>
        <div className="item-name item-description">
          {props.name}
        </div>
        <div className="item-price item-description">
          {props.price}$
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;