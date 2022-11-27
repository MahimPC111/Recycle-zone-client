import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/dashboard'>My Orders</Link></li>
                        <li><Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/dashboard/allSellers'>All Sellers</Link></li>
                        <li><Link className='font-semibold my-2 lg:my-0 mx-2 whitespace-nowrap' to='/dashboard/allBuyers'>All Buyers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;