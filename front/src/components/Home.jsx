import React from "react";
import { useGetAllproductsQuery } from "../features/productsApi";
import "./Home.css";

const Home = () => {
    const { data, error, isLoading } = useGetAllproductsQuery()
    return (
        <div className="os__home">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured...</p>
            ) : (
                <>
                    <h2>New Arrivals</h2>
                    <div className="os__home-products">
                        {data?.map(product => <div key={product.id} className="os__home-product">
                            <div className="os__home-product-header">
                                <h3>{product.brand}</h3>
                                <h3>{product.name}</h3>
                            </div>
                            <div className="os__home-product-image">
                                <img src={`http://localhost:5000${product.image}`} alt={product.name}/>
                            </div>
                            <div className="os__home-product-details">
                                <p>Price: ${product.price}</p>
                                <p>Rating: {product.rating}</p>
                                <p>Reviews: {product.numReviews}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div> )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;