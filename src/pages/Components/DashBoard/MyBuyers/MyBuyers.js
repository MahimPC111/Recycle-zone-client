import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import Loader from '../../../../shortComponents/Loader';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://recycle-zone-server-ten.vercel.app/orders/buyers?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(buyers)
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    {
                        buyers.length ?
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Location</th>
                            </tr>
                            :
                            <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-semibold my-4'>You don't have any buyers yet</h2>
                    }
                </thead>
                <tbody>
                    {
                        buyers.length ?
                            buyers.map((buyer, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.buyer}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.phone}</td>
                                    <td>{buyer.location}</td>
                                </tr>
                            )
                            :
                            <h2 className='text-lg md:text-xl lg:text-2xl text-center font-semibold my-2'>Please wait until someone place an order of your product.</h2>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBuyers;