import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';
import { useTitle } from '../../../../shortComponents/Title';
import BookNow from '../BookNow/BookNow';
import Product from './Product';

const Products = () => {
    useTitle('Product Details')
    const [loading, setLoading] = useState(false);
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const { data: currentUser = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://recycle-zone-server-ten.vercel.app/users/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    if (loading) {
        return <Loader></Loader>
    }


    return (
        <div>
            {
                user ?
                    <></>
                    :
                    <h2 className='text-3xl my-5 text-center text-gray-600 font-semibold'>Please login to place a Order</h2>
            }
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    products.length && products.map(product =>
                        <Product key={product._id}
                            product={product}
                            currentUser={currentUser}
                            setSelectedProduct={setSelectedProduct}
                        ></Product>)
                }
                {
                    selectedProduct && <BookNow
                        setSelectedProduct={setSelectedProduct}
                        selectedProduct={selectedProduct}
                        refetch={refetch}
                    ></BookNow>
                }
            </div>
        </div>
    );
};

export default Products;