import React from 'react';

const Product = ({ product, setSelectedProduct, currentUser }) => {
    const { name, img, location, original_price, resale_price, used_time, published_date, seller_name } = product;

    const modalInfo = {
        buyer: currentUser.name,
        email: currentUser.email,
        item: name,
        price: resale_price,
        img
    }

    return (
        <div className="card w-96 bg-base-100 shadow-lg mx-auto">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Original price: <del>{original_price}</del> BDT</p>
                <p>Resale price: {resale_price} BDT</p>
                <p>Usages time: {used_time}</p>
                <p>Seller name: {seller_name}</p>
                <p>Published date: {published_date}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setSelectedProduct(modalInfo)} htmlFor="booking-product" className="btn btn-primary" disabled={currentUser.role === 'seller' || currentUser.role === 'admin'}>Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;