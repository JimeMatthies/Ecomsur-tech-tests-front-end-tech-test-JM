import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { clearCart, addToCart, decreaseFromCart } from '../actions';
import './Cart.css'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    };
    const handledecrease = (id) => {
        dispatch(decreaseFromCart(id));
    };
    const handleclearCart = () => {
        dispatch(clearCart())
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.cantidad * product.price;
        });
        return total.toFixed(2);
    };

    return (
        <div>
            <div className="os__cart-info">
                <h2 className="os__cart-total">Grand total: ${getTotalPrice()}</h2>
                <button className=".os__cart-button" onClick={handleclearCart}>Clear cart</button>
            </div>
            <div className="os__cart-container">
                {cart.map((product) => (
                    <div className="os__cart" key={product._id}>
                        <Link to={`/detail/${product._id}`}>
                            <h3 className="os__cart-name">{product.name}</h3>
                            <img className="os__cart-image" src={`http://localhost:5000${product.image}`} alt={product.name} />
                        </Link>
                        <p>Quantity: {product.cantidad}</p>
                        <p>Unit price: ${product.price.toFixed(2)}</p>
                        <p>Amount: ${(product.cantidad * product.price).toFixed(2)}</p>
                        <button className=".os__cart-button" onClick={() => handleAddToCart(product)}>Add item to cart</button>
                        <button className=".os__cart-button" onClick={() => handledecrease(product._id)}>Remove item from cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;