import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';



const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    console.log(location)
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        Swal.fire({
            title: "Please Login ",
            text: "To get premium access you have to login from your account",
            icon: "error"
        });

        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;