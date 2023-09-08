import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useAuthorization = () => {
  const { axiosSecure } = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/authorization?email=${user?.email}`);
        setRole(res.data.role);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!loading) {
      fetchData();
    }
  }, [axiosSecure, user, loading]);

  return { role, isLoading };
};

export default useAuthorization;