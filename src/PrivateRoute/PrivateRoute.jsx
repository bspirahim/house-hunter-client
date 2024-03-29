import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    if (user && user?.email) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
}

export default PrivateRoute;