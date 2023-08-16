import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/Provider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" flex  justify-center">
        <span className=" w-96 loading loading-dots "></span>
        <span className="  w-96 loading loading-dots "></span>
        <span className="loading loading-dots  w-96"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivetRouter;
