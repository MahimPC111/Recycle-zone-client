import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from './Category';


const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        Axios.get('https://recycle-zone-server-ten.vercel.app/categories')
            .then(res => {
                setCategories(res.data)
            })
    }, [])


    return (
        <div className='my-12 md:my-16 lg:my-28'>
            <h2 className='text-orange-600 text-center text-2xl md:text-4xl lg:text-5xl font-bold'>Available Products</h2>
            <div className='mt-6 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.length && categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;