import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const DashboardContent = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-center text-3xl mt-20'>Welcome Back, {user?.name}</h2>
        </div>
    );
};

export default DashboardContent;