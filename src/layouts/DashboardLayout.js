import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Header from '../pages/shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-white">
                        <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard'>My Orders</Link></li>
                        {
                            isSeller &&
                            <>
                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>

                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/allSellers'>All Sellers</Link></li>
                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/allBuyers'>All Buyers</Link></li>
                                <li><Link className='font-semibold mt-2 whitespace-nowrap' to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;