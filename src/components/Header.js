import { Form, Link } from "react-router-dom";
import "../css/Header.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  const [cartAnimated, setCartAnimated] = useState(false);
  if(useLocation().pathname === '/'){
    return(
      <div></div>
    );
  }
  else{
    return (
      <header>
        <div className="header-content">
          <div className="left-header">
            <Link to="/">
              <h1>Pugman</h1>
            </Link>
          </div>
          <div className="right-header">
            <Link to="/shop">Shop</Link>
            <button className={cartAnimated ? 'animated' : ''}
                    onClick={() => props.setIsCartOpen(!props.isCartOpen)}
                    onMouseEnter={() => setCartAnimated(true)}
                    onAnimationEnd={() => setCartAnimated(false)}>
              <div className="cart-item-amount">
                {Object.keys(props.cart).reduce((acc, key) => 
                        acc + props.cart[key], 0)}
              </div>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;