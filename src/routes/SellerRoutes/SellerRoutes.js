import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useSeller from '../../hooks/useSeller';
import Loader from '../../shortComponents/Loader';

const SellerRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const [isSeller, loadingSeller] = useSeller(user?.email)
    const location = useLocation();

    if (loading || loadingSeller) {
        return <Loader></Loader>
    }
    if (isSeller && user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;
