import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import './Advertise.css'

const Advertise = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://recycle-zone-server-ten.vercel.app/products/isAdvertised')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='my-20 px-2 sm:px-4 md:px-6 lg:px-10'>
            {
                products.length &&
                <div>
                    <h3 className='text-lg md:text-2xl lg:text-3xl font-bold font-serif text-center'>Advertised products!!</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                        {
                            products.map((product, i) =>
                                <div key={i} className='mx-auto'>
                                    <Link to={`/category/${product.category_id}`}>
                                        <div className="advertised-card w-60 md:w-72 sm:w-80 lg:w-96 cursor-pointer">
                                            <figure><img className='mx-auto w-60 md:w-72 sm:w-80 lg:w-96' src={product.img} alt="Mobile" /></figure>
                                            <div className="advertised-card-body">
                                                <h2 className="card-title">{product.name}</h2>
                                                <p>Published date: {product.published_date}</p>
                                                <p>Original price: <del>{product.original_price} BDT</del></p>
                                                <p>Resale price: {product.resale_price} BDT</p>
                                                <p>Location: {product.location}</p>
                                            </div>
                                        </div></Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertise;