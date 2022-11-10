import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} =useContext(AuthContext);
    const location
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>

};

export default PrivateRoute;