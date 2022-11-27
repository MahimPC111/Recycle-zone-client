import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(orders)

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.length && orders.map((order, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <img className='w-12 h-12' src={order.img} alt='' />
                                </td>
                                <td>{order.item}</td>
                                <td>{order.price}</td>
                                <td>
                                    <button className='btn btn-sm'>Pay</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;