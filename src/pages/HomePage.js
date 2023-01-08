import React from "react";
import "../css/HomePage.css";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomePage(props) {

  useEffect(() => {
    if(props.isCartOpen){
      props.setIsCartOpen(false);
    }
  
  }, [])

  return (
    <div className="home">
      <Header></Header>
      <div className="content-wrapper">
          <div className="text-wrapper">
            <h2>The Pugman Merch Shop</h2>
            <div className="description">
            Find all the gear you need to showcase your love for this adorable half pug, 
            half human superhero. 
            </div>
            <div className="grid">
              <div className="grid-item grid-item-icon"><i className="fas fa-list"></i></div>
              <div className="grid-item">wide range of items</div>
              <div className="grid-item grid-item-icon"><i className="fas fa-gem"></i></div>
              <div className="grid-item">highest quality</div>
              <div className="grid-item grid-item-icon"><i className="fas fa-mask"></i></div>
              <div className="grid-item">offical products</div>
            </div>
            <div className="shop-btn-wrapper">
              <Link className="shop-now-btn" to='/shop'>Shop Now!</Link>
            </div>
          </div>
          <div className="img-wrapper">
            <img className="pugman" src={require('../imgs/pug_hero2.png')}/>
          </div>
      </div>
    </div>
  );
}

export default HomePage;