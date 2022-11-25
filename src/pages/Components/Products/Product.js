import React from 'react';

const Product = ({ product }) => {
    const { name, img, location, original_price, resale_price, used_time, published_date, seller_name } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-lg mx-auto">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Original price: {original_price} BDT</p>
                <p>Resale price: {resale_price}</p>
                <p>Usages time: {used_time}</p>
                <p>Seller name: {seller_name}</p>
                <p>Published date: {published_date}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;