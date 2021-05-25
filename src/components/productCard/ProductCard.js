import React from 'react'
import './ProductCard.css'
import krunch from '../../img/krunch-with-drink.png'
export default function ProductCard(props) {
    let product = props.product 
    return (
        <div className="featured-product-card">
                <div className="featured-product-card-inner">
                    <div className="card-image">
                        <img width="100%" src={krunch} alt="" />
                    </div>
                    <div className="card-meal-name">
                        <p className="mb-0">{product.title}</p>
                    </div>
                    <div className="card-meal-details">
                        <p className="assistant">{product.description}</p>
                    </div>
                    <div className="card-meal-footer">
                        <a href="index.html" className="card-price">PKR {product.price}</a>
                        <a href="index.html" className="add-to-bucket">add to bucket</a>
                    </div>
            </div>
        </div>
    )
}
