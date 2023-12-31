import { useContext } from "react";


import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/Provider/AuthProvider";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;