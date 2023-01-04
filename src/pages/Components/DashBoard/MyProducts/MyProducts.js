import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Deleted successfully')
                refetch();
            })
    }

    const handleAdvertise = (id) => {
        const advertise = {
            isAdvertised: true,
        }
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Product advertised successfully')
                refetch();
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    {
                        products.length ?
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Advertise</th>
                                <th>Delete</th>
                            </tr>
                            :
                            <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold my-4'>You haven't added any product yet</h2>
                    }
                </thead>
                <tbody>
                    {
                        products.length ?
                            products.map((product, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <img className='w-12 h-12' src={product.img} alt='' />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.resale_price}</td>
                                    <td>{product.status}</td>
                                    <td><button onClick={() => handleAdvertise(product._id)} className='btn btn-sm btn-primary' disabled={product.isAdvertised}>
                                        {product.isAdvertised ? 'Advertised' : 'Advertise'}
                                    </button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className='btn btn-sm btn-error'>X</button></td>
                                </tr>
                            )
                            :
                            <h2 className='text-lg md:text-xl lg:text-2xl text-center font-semibold my-2'>You have to add at least one product to checkout your product list.</h2>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;