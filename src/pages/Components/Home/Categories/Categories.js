import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from './Category';
import Loader from '../../../../shortComponents/Loader';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h2 className='mt-20 text-orange-600 text-center text-2xl md:text-3xl lg:text-5xl font-bold'>Available Products</h2>
            <div className='my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.length && categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;