import { Form, Link } from "react-router-dom";
import React from "react";
import "../css/Footer.css";

function Footer() {

  return (
    <footer>
      <div className="footer-content">
        © {new Date().getFullYear()} created by: 
        <a href="https://github.com/LucaBla" target="_blank">
          Luca Blazevic<i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;