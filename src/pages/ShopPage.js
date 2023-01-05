import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import "../css/ShopPage.css";
import items from "../Items.js";

function ShopPage() {
  return (
    <div className="shop">
      <Header></Header>
      <div className="content-wrapper">
        <div className="news">
          <div className="news-description">
          <p>NEW!!!</p>
          Show off your love for Pugman with our cute and unique mug, 
          a must-have for any fan of this cute Superhero.
          </div>
        <img className="news-img" src={require('../imgs/shop/pug_cup_transparent_comic.png')}></img>
        </div>
        <div className="item-grid">
        {items.map((item) => {
          return (
            <ItemCard key={item.itemId} id={item.itemId} name={item.name} price={item.price} img={item.img}></ItemCard>
          )
        })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ShopPage;

