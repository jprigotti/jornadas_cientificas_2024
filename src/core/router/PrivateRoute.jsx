import { Navigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useHooks } from '../../hooks/useHooks';

const PrivateRoute = ({ children }) => {

    const { isLoggedIn } = useHooks();

    if (isLoggedIn) {
        return children;
    }

    return <Navigate to="/login" />;
}

export default PrivateRoute