import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navOptions = (
    <>
      <li className="text-white">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          HOME
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          profile
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Users
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/blogManagement"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog Management
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/selectedGames"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Add To Cart Games
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/enrolledTour"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Enrolled Tournaments
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
          to="/dashboard/addblog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Add Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <style>
        {`
          /* Style for navigation menu */
          .text-white {
            color: white;
          }
          
          .text-white:hover {
            color: green;
          }

          /* Linear gradient background for the body */
          body {
            background: linear-gradient(to bottom, black, #111);
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
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
          <ul className="p-10 space-y-4 w-80 min-h-full bg-black ">
            {/* Sidebar content here */}
            {navOptions}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
