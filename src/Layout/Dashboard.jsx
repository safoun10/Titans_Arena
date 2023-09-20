import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../public/logoTest41.png";
import {
  FaAlignCenter,
  FaCartArrowDown,
  FaDiceD6,
  FaHome,
  FaPlus,
  FaProductHunt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import DashboardNavigationBar from "../Pages/Dashboard/DashboardComponents/DashboardNavigationBar";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  // console.log(user?.email);
  const [isAdmin] = useAdmin();

  const navOptions = (
    <>
      {isAdmin ? (
        <>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaHome className="text-yellow-500 text-lg" /> HOME
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/profile">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaProductHunt className="text-yellow-500 text-lg" /> profile
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/users">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaUser className="text-yellow-500 text-lg" /> Users
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/blogManagement">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaAlignCenter className="text-yellow-500 text-lg" /> Blog
                Management
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/addblog">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaPlus className="text-yellow-500 text-lg" /> Add Blog
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/test2">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaPlus className="text-yellow-500 text-lg" /> Calendar
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/enrolledTournaments">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> Enrolled
                Tournaments
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500   ">
            <Link to="/dashboard/CommentAndReviewManage">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> My Comments And
                Reviews
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500   ">
            <Link to="/dashboard/bookMarkedItems">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> My Bookmarked
                Items
              </p>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaHome className="text-yellow-500 text-lg" /> HOME
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/profile">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaProductHunt className="text-yellow-500 text-lg" /> profile
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/selectedGames">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaCartArrowDown className="text-yellow-500 text-lg" /> Add To
                Cart Games
              </p>
            </Link>
          </li>

          <li className="text-white bg-slate-900 p-2 hover:bg-green-500  text-center ">
            <Link to="/dashboard/enrolledTournaments">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> Enrolled
                Tournaments
              </p>
            </Link>
          </li>
          <li className="text-white bg-slate-900 p-2 hover:bg-green-500 ">
            <Link to="/dashboard/CommentAndReviewManage">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> My Comments And
                Reviews
              </p>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] bg-cover">
      <style>
        {`
          /* Style for navigation menu */
          .text-white {
            color: white;
          }
        
          /* Linear gradient background for the body */
          body {
            background: linear-gradient(to bottom, black, #111);
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <div>
            {/* <div className="fixed top-0  w-full z-10">
              <DashboardNavigationBar />
            </div> */}

            {/* <div className="md:flex flex w-12/12">
           
              <div className="h-screen w-[20%] hidden md:block  bg-black overflow-y-scroll  ">
             
                <ul className="mt-[3.7rem]">
                  <div className="  ">
                    <div className="space-y-1 border">
                      {navOptions}

                      {navOptions}
                      {navOptions}
                      {navOptions}
                    </div>
                  </div>
                </ul>
              </div>
             
              <div className="w-full mt-[3.7rem]">
                <div >
                  <Outlet />
                </div>
              </div>
            </div> */}

            <div className="fixed left-0 top-2  bottom-0 md:w-1/5 md:block hidden overflow-y-auto">
              {/* Sidebar content */}
              <ul>
                {/* <ul className="mt-[3.7rem]"> */}
                {/* <div >
                  <div className="space-y-1">{navOptions}</div>
                  <div className="absolute bottom-2 left-[35%]">
                    <ul className="flex gap-4 items-center">
                      <FaCog className="w-5 h-5" />
                      <FaSignOutAlt className="w-5 h-5" />
                    </ul>
                  </div>
                </div> */}
                <div className="space-y-1">{navOptions}</div>
              </ul>
            </div>
            {/* Content area */}
            {/* <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button md:hidden"
          >
            Open drawer
          </label> */}
            <label
              htmlFor="my-drawer"
              className="fixed z-10  drawer-button md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500 mt-4 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div className="md:ml-[20%] md:mx-auto  ml-0">
              <div className=" ">
                {/* <div className="max-w-[220rem] mx-auto mt-10 "> */}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-5 space-y-4 min-h-full bg-black">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
