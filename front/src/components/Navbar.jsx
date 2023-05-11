import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="os__navbar">
            <Link className="os__navbar-home" to="/">
                <h2>Online Shop</h2>
            </Link>
            <Link className="os__navbar-cart" to="/cart">
                <BsCart4 />
                <span className="os__navbar-quantity">3</span>
            </Link>
        </nav>
    );
}

export default Navbar;