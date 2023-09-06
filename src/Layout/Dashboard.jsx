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
} from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import DashboardNavigationBar from "../Pages/Dashboard/DashboardComponents/DashboardNavigationBar";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const Dashboard = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const [axiosSecure] = useAxiosSecure();
  const [isLoading, SetIsLoading] = useState(true);
  const [admin, setAdmin] = useState();

  const Admin = async () => {
    // SetIsLoading(true)
    const res = await axiosSecure(`/users/admin/${user?.email}`);
    const data = res.data.admin;
    setAdmin(data);
    SetIsLoading(false);
    console.log(data);
  };
  Admin();

  if (isLoading === true) {
    return <h2>Loading</h2>;
  }

  const navOptions = (
    <>
      {admin ? (
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
            <Link to="/dashboard/enrolledTour">
              <p className="flex items-center gap-2 text- font-semibold ">
                <FaDiceD6 className="text-yellow-500 text-lg" /> Enrolled
                Tournaments
              </p>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
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
          <div className="">
            <div className="fixed top-0  w-full z-10">
              <DashboardNavigationBar />
            </div>

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
                <div className="">
                  <Outlet />
                </div>
              </div>
            </div> */}

            <div className="fixed left-0 top-2  bottom-0 md:w-1/5 md:block hidden overflow-y-auto">
              {/* Sidebar content */}
              <ul className="mt-[3.7rem]">
                <div className="space-y-1">{navOptions}</div>
              </ul>
            </div>
            {/* Content area */}
            <div className="md:ml-[20%]">
              <div className="max-w-[220rem] mx-auto mt-10 p-4">
                <Outlet />
              </div>
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button md:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-5 space-y-4 min-h-full bg-black">{navOptions}</ul>
        </div>
      </div>
      {/* <div className="drawer lg:drawer-open">
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
          <ul className="p-10 space-y-4 w-80 min-h-full bg-black">
            {navOptions}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
