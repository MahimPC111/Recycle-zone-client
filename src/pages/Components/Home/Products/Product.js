import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import bluetick from '../../../../assets/Logo/bluetick.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Product = ({ product, setSelectedProduct, currentUser }) => {
    const { _id, name, img, location, original_price, resale_price, used_time, published_date, seller_name, seller_email } = product;

    const { data: seller = [] } = useQuery({
        queryKey: ['users', seller_email],
        queryFn: async () => {
            const res = await fetch(`https://recycle-zone-server-ten.vercel.app/users/${seller_email}`)
            const data = await res.json()
            return data;
        }
    })

    const modalInfo = {
        productId: _id,
        buyer: currentUser.name,
        email: currentUser.email,
        item: name,
        price: resale_price,
        img,
        seller_email
    }

    const handleReportedItem = (product) => {
        const reportedProduct = {
            productId: product._id,
            productName: product.name,
            image: product.img
        }
        fetch(`https://recycle-zone-server-ten.vercel.app/reportedItems`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reportedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Item reported successfully')
                }
            })
    }

    return (
        <div className="card w-80 lg:w-96 bg-base-100 shadow-lg mx-auto">
            <figure>
                <PhotoProvider>
                    <div className="foo">
                        <PhotoView src={img}>
                            <img className='w-[225px] h-[225px]' src={img} alt={name} />
                        </PhotoView>
                    </div>
                </PhotoProvider>
            </figure>
            <div className="card-body p-5 md:p-6 lg:p-8">
                <h2 className="card-title">{name}</h2>
                <p>Original price: <del>{original_price} BDT</del></p>
                <p>Resale price: {resale_price} BDT</p>
                <p>Usages time: {used_time}</p>
                <p className='flex items-center'>Seller name: {seller_name}
                    {
                        seller.isVerified && <img src={bluetick} className='w-5 h-5 ml-1' alt='' />
                    }
                </p>
                <p>Published date: {published_date}</p>
                <p>Location: {location}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <label onClick={() => handleReportedItem(product)} className="btn btn-primary btn-sm" disabled={currentUser.role !== 'buyer'}>Report to Admin</label>
                    <label onClick={() => setSelectedProduct(modalInfo)} htmlFor="booking-product" className="btn btn-primary btn-sm" disabled={currentUser.role !== 'buyer'}>Book now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;