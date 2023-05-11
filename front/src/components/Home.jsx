import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card"
import { getProducts } from '../actions';
import "./Home.css";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="os__home">
            <div className="os__home-container">
                {products.map((product) => (
                    <Fragment key={product._id}>
                        <Card
                            id={product._id}
                            stock={product.countInStock}
                            product={product}
                            brand={product.brand}
                            name={product.name}
                            image={product.image}
                            price={`Price: ${product.price}`}
                            rating={`Rating: ${product.rating}`}
                            numReviews={`Reviews: ${product.numReviews}`} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default Home;