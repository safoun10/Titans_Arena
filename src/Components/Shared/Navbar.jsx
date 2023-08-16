import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuDropDown from "./MenuDropDown";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "text-black")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Support
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          eSports
        </NavLink>
      </li>
    </>
  );



  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div className="container mx-auto border-b-[1px]">
        <div className="px-7 flex flex-row items-center justify-between gap-3 md:gap-0">
          <div className="cursor-pointer">logo</div>
          <div className="hidden lg:block">
            <div className="flex list-none">{navOptions}</div>
          </div>
          
          <div className="flex">
          <Link to="/login" className="bt-primary font-bold">
            Log In
          </Link>
          <MenuDropDown/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
