import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../../shortComponents/Loader';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/login/loginBuyer' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoutes;