import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;