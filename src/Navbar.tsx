import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
type NavbarProps ={
    cartCount:number;
}

function Navbar({cartCount}:NavbarProps){
    return(
    <nav className="navbar">
    <div className="navbar-left">
   <Link to="/" className="logo">
    <p>Store</p>
    </Link>
    </div>
    <div className="navbar-right">
    <Link to="/cart" className="cart-icon">
     <i className="fas fa-shopping-cart"></i>
     <p className="Cart-label">Cart 🛒</p>
          <span className="cart-count">{cartCount}</span>
    </Link>
    </div>
    </nav>
    );
}
export default Navbar;
