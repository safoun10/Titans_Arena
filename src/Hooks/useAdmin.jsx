import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';



const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin, setIsAdmin] = useState(null);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        const fetchAdminStatus = async () => {
            try {
                const res = await axiosSecure(`/users/admin/${user?.email}`);
                setIsAdmin(res.data.admin);
                setIsAdminLoading(false);
            } catch (error) {
                console.error('Error fetching admin status:', error);
                setIsAdmin(false); // Set isAdmin to false if there was an error
                setIsAdminLoading(false);
            }
        };

        if (user?.email) {
            fetchAdminStatus();
        } else {
            setIsAdmin(false); // Set isAdmin to false if there's no user email
            setIsAdminLoading(false);
        }
    }, [axiosSecure, user?.email]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
