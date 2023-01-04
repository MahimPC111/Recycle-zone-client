import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './Advertise.css'

const Advertise = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products/isAdvertised')
            const data = await res.json()
            return data;
        }
    })

    return (
        <div className='my-10'>
            {
                products.length &&
                <div>
                    <h3 className='text-lg md:text-2xl lg:text-3xl font-bold font-serif text-center'>Advertised items are available now!!</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 my-10'>
                        {
                            products.map((product, i) =>
                                <div key={i} className='mx-auto'>
                                    <img src={product.img} className='w-48 h-48 advertised-image' alt="" />
                                    <h3 className='text-center text-lg font-sans font-bold'>{product.name}</h3>
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