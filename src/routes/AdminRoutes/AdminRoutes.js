import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loader from '../../shortComponents/Loader';

const AdminRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const [isAdmin, loadingAdmin] = useAdmin(user?.email)
    const location = useLocation();

    if (loading || loadingAdmin) {
        return <Loader></Loader>
    }
    if (isAdmin && user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
