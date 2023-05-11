import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';
import { getTotalProductsInCart } from '../reducer';
import { useSelector } from 'react-redux';
import "./Navbar.css";

function CartSummry({ cart }) {
    const totalProducts = getTotalProductsInCart(cart)
    return (
        <div className="os__navbar-cart-container">
            <BsCart4 className="os__navbar-cart-icon" />
            <p className="os__navbar-cart-quantity">{totalProducts}</p>
        </div>
    );
};

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <div className="os__navbar">
            <Link className="os__navbar-home" to="/">
                <h2>Online Shop</h2>
            </Link>
            <Link to={'/cart'}>
                <CartSummry cart={cart} className="os__navbar-cart" />
            </Link>
        </div>
    );
};

export default Navbar;