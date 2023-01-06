import { Form, Link } from "react-router-dom";
import "../css/Header.css";
import { useLocation } from "react-router-dom";

function Header(props) {
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
            <button onClick={() => props.setIsCartOpen(!props.isCartOpen)}><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;