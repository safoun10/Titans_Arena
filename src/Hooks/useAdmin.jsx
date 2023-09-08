import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const [axiosSecure] = useAxiosSecure()
    const [admin, setAdmin] = useState(true);
    const [adminLoading, isAdminLoading] = useState(true)

 
     useEffect( async ()=>{
        const res = await axiosSecure(`/users/admin/${user?.email}`);
        const data = res.data.admin;
        console.log(data)
        setAdmin(data);
        isAdminLoading(false);
        console.log(data);
     },[admin, adminLoading])
   
};

export default useAdmin;