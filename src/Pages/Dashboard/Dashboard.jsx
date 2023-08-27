import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navOptions = (
    <>
      <li className="text-black">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          HOME
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Users
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/dashboard/selectedGames"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Add To Cart Games
        </NavLink>
      </li>
      <li className="text-black">
        <NavLink
          to="/dashboard/enrolledTour"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Enrolled Tournaments
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
           {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
