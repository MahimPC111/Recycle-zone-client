import { useQuery } from '@tanstack/react-query';
import React from 'react';
import bluetick from '../../../../assets/Logo/bluetick.png'

const Product = ({ product, setSelectedProduct, currentUser }) => {
    const { name, img, location, original_price, resale_price, used_time, published_date, seller_name, email } = product;

    const { data: seller = [] } = useQuery({
        queryKey: ['users', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${email}`)
            const data = await res.json()
            return data;
        }
    })

    const modalInfo = {
        buyer: currentUser.name,
        email: currentUser.email,
        item: name,
        price: resale_price,
        img
    }

    return (
        <div className="card w-96 bg-base-100 shadow-lg mx-auto">
            <figure><img className='w-[225px] h-[225px]' src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Original price: <del>{original_price}</del> BDT</p>
                <p>Resale price: {resale_price} BDT</p>
                <p>Usages time: {used_time}</p>
                <p className='flex items-center'>Seller name: {seller_name}
                    {
                        seller.isVerified && <img src={bluetick} className='w-5 h-5 ml-1' alt='' />
                    }
                </p>
                <p>Published date: {published_date}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-end">
                    <label onClick={() => setSelectedProduct(modalInfo)} htmlFor="booking-product" className="btn btn-primary" disabled={currentUser.role !== 'buyer'}>Book now</label>
                </div>
            </div>
        </div>
    );
};
// 'seller' || currentUser.role === 'admin'
export default Product;