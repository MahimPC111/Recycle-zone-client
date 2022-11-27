import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertise = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?advertise=${true}`)
            const data = await res.json()
            return data;
        }
    })

    console.log(products)
    return (
        <div>

        </div>
    );
};

export default Advertise;