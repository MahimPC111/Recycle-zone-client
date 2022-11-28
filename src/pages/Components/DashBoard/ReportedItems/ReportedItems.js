import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems')
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (id, reportedId) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                fetch(`http://localhost:5000/reportedItems/${reportedId}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success('Deleted successfully')
                        refetch();
                    })
            })

    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedItems.length && reportedItems.map((item, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='w-12 h-12' src={item.image} alt='' />
                                </td>
                                <td>{item.productName}</td>
                                <td>
                                    <button onClick={() => handleDelete(item.productId, item._id)} className='btn btn-sm btn-error'>X</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedItems;