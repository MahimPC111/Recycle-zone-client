import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://recycle-zone-server-ten.vercel.app/users?role=buyer')
            const data = await res.json()
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`https://recycle-zone-server-ten.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                toast.success('Buyer deleted successfully')
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.length && buyers.map((buyer, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>
                                    <button onClick={() => handleDelete(buyer._id)} className='btn btn-sm btn-error'>X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;