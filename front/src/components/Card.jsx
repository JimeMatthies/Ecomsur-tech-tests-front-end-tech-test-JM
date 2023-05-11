import React from "react";
import { addToCart, decreaseFromCart } from '../actions';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({ id, stock, product, brand, name, image, price, rating, numReviews }) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    };
    const handledecrease = () => {
        dispatch(decreaseFromCart(id));
    };
    return (
        <div className="os__products">
            {stock === 0 ? (
                <div className="os__product">
                    <Link to={`/detail/${product._id}`}>
                        <div className="os__product-header">
                            <h2 className="os__product-brand">{brand}</h2>
                            <h2 className="os__product-name">{name}</h2>
                        </div>
                        <img className="os__product-image" src={`http://localhost:5000${image}`} alt={name} />
                    </Link>
                    <div className="os__product-information">
                        <h4>{`Price: $ ${price}`}</h4>
                        <h4>{`Rating: ${rating}`}</h4>
                        <h4>{`Reviews: ${numReviews}`}</h4>
                        <button>Out of stock</button>
                    </div>
                </div>
            ) : (
                <div className="os__product">
                    <Link to={`/detail/${product._id}`}>
                        <div className="os__product-header">
                            <h2 className="os__product-brand">{brand}</h2>
                            <h2 className="os__product-name">{name}</h2>
                        </div>
                        <img className="os__product-image" src={`http://localhost:5000${image}`} alt={name} />
                    </Link>
                    <div className="os__product-information">
                        <h4>{`Price: $ ${price}`}</h4>
                        <h4>{`Rating: ${rating}`}</h4>
                        <h4>{`Reviews: ${numReviews}`}</h4>
                        <button onClick={handleAddToCart}>Add item to cart</button>
                        <button onClick={handledecrease}>Remove item from cart</button>
                    </div>
                </div>
            )}
        </div>
    )
};
export default Card;