import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaSistrix } from "react-icons/fa";
import logo from "../../../../public/logoTest41.png";
import {
  BiBell,
  BiDotsHorizontal,
  BiFile,
  BiSolidUserCircle,
} from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

const DashboardNavigationBar = () => {
  const navLink = (
    <>
      <ul className="flex gap-4">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/userPolicy">User Policy</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/more">
            <BiDotsHorizontal className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <div className="text-white bg-black">
      <div className="z-10 flex justify-around items-center  border-b p-2 w-full">
        <div className="">
          <Link to="/" className="normal-case text-xl flex items-center">
            <img className="w-56 " src={logo} alt="" />
          </Link>
        </div>

        <div className="text-sm font-semibold">{navLink}</div>

        <div className="flex items-center">
          <BiSolidUserCircle className="h-8 w-8" />
          <p className="text-sm font-semibold">Clayton Santos</p>
          <div className=" rounded-full p-2  ">
            <BiBell className="h-5 w-5 text-yellow-400 " />
          </div>
          <div className=" rounded-full p-2 ">
            <RxCrossCircled className="h-5 w-5 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigationBar;
