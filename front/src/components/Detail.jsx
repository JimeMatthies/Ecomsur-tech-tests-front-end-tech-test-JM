import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProducts, addToCart, decreaseFromCart } from '../actions';
import { useParams } from 'react-router-dom';
import './Detail.css'

const Detail = (props) => {
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDetailProducts(id));
    }, [dispatch, id]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handledecrease = (id) => {
        dispatch(decreaseFromCart(id));
    };

    return (
        <div>
            {detail.countInStock === 0 ? (
                <div className="os__detail">
                    <div className="os__detail-card">
                        <div className="os__detail-header">
                            <h2 className="os__detail-brand">{detail.brand}</h2>
                            <h2 className="os__detail-name">{detail.name}</h2>
                            <img className="os__detail-image" src={`http://localhost:5000${detail.image}`} alt={detail.name} />
                        </div>
                        <div className="os__detail-information">
                            <p>{detail.description}</p>
                            <h4>{`Price: $ ${detail.price}`}</h4>
                            <h4>{`Stock: ${detail.countInStock}`}</h4>
                            <h4>{`Rating: ${detail.rating}`}</h4>
                            <h4>{`Reviews: ${detail.numReviews}`}</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="os__detail">
                    <div className="os__detail-card">
                        <div className="os__detail-header">
                            <h2 className="os__detail-brand">{detail.brand}</h2>
                            <h2 className="os__detail-name">{detail.name}</h2>
                            <img className="os__detail-image" src={`http://localhost:5000${detail.image}`} alt={detail.name} />
                        </div>
                        <div className="os__detail-information">
                            <p>{detail.description}</p>
                            <h4>{`Price: $ ${detail.price}`}</h4>
                            <h4>{`Stock: ${detail.countInStock}`}</h4>
                            <h4>{`Rating: ${detail.rating}`}</h4>
                            <h4>{`Reviews: ${detail.numReviews}`}</h4>
                            <button
                                className='detail_boton'
                                onClick={() => handleAddToCart(detail)}>
                                Add item to cart
                            </button>
                            <button
                                className='detail_boton'
                                onClick={() => handledecrease(detail._id)}>
                                Remove item from cart
                            </button>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Detail;