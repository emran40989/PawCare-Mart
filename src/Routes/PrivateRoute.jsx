import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    
    console.log(loading, user);
    if(loading){
        return <div>Loading....</div>
    }
    
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;