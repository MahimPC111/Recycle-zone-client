import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';
import BookNow from '../BookNow/BookNow';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const { data: currentUser = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`)
            const data = await res.json()
            return data;
        }
    })


    if (isLoading) {
        return <Loader></Loader>
    }

    return (
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
    );
};

export default Products;