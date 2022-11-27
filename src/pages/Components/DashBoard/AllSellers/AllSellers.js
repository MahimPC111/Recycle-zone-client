import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import bluetick from '../../../../assets/Logo/bluetick.png'

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller')
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Seller deleted successfully')
                refetch();
            })
    }

    const handleVerify = (id) => {
        const verify = {
            isVerified: true,
        }
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verify)
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                toast.success('Seller verified successfully')
                refetch();
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verified</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.length && sellers.map((seller, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td className='flex items-center'>
                                    {seller.name}
                                    {
                                        seller.isVerified && <img src={bluetick} className='w-5 h-5 ml-1' alt='' />
                                    }
                                </td>
                                <td>{seller.email}</td>
                                <td>
                                    <button onClick={() => handleVerify(seller._id)} className='btn btn-sm' disabled={seller.isVerified}>
                                        {seller.isVerified ? 'Verified' : 'Verify'}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(seller._id)} className='btn btn-sm btn-error'>X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;