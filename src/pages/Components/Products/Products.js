import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.length && products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;