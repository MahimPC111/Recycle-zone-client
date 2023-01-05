import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://recycle-zone-server-ten.vercel.app/orders?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    {
                        orders.length ?
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                            :
                            <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold my-4'>You haven't placed any order yet</h2>
                    }
                </thead>
                <tbody>
                    {
                        orders.length ?
                            orders.map((order, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <img className='w-12 h-12' src={order.img} alt='' />
                                    </td>
                                    <td>{order.item}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        {
                                            order.paid ?
                                                <span className='text-slate-300 font-bold'>Paid</span>
                                                :
                                                <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm'>Pay</button></Link>
                                        }
                                    </td>
                                </tr>
                            )
                            :
                            <h2 className='text-lg md:text-xl lg:text-2xl text-center font-semibold my-2'>Please order something</h2>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;