import { Form, Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
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
          <Link to="/cart"><i className="fas fa-shopping-basket"></i></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;