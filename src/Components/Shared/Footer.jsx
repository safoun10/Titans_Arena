import React from "react";
// import logo from "../../../assets/logo/chef-1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="px-5 py-6 lg:px-24 lg:py-20  bg-gray-950">
        <div className="grid grid-cols lg:grid-cols-6 pb-10">
          <div className="col-span-2">
            <h3 className="text-white font-extrabold text-3xl pb-5">
              <Link className="flex items-center gap-2">Logo</Link>
            </h3>
            <p className="text-slate-300 font-normal text-base w-5/6 pb-5">
              About our mistion (Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam est dolorum molestiae debitis adipisci
              vel iure recusandae molestias fugit sequi.)
            </p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Company svds
            </h1>
            <p className="text-slate-300 font-normal text-base">About</p>
            <p className="text-slate-300 font-normal text-base">Us Work</p>
            <p className="text-slate-300 font-normal text-base">Latest News</p>
            <p className="text-slate-300 font-normal text-base">Careers</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              QUICK LINK
            </h1>
            <p className="text-slate-300 font-normal text-base">
              Setting & Privacy
            </p>
            <p className="text-slate-300 font-normal text-base">
              Help & Support
            </p>
            <p className="text-slate-300 font-normal text-base">
              Live Auctions
            </p>
            <p className="text-slate-300 font-normal text-base">Item Details</p>
            <p className="text-slate-300 font-normal text-base">Our News</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Support
            </h1>
            <p className="text-slate-300 font-normal text-base">
              Help & Support
            </p>
            <p className="text-slate-300 font-normal text-base">Item Details</p>
            <p className="text-slate-300 font-normal text-base">Setting & Privacy</p>
            <p className="text-slate-300 font-normal text-base">Our News</p>
            <p className="text-slate-300 font-normal text-base">Item Details</p>
            <p className="text-slate-300 font-normal text-base">Live Auctions</p>
          </div>
          <div>
            <h1 className="text-slate-300 text-xl font-semibold pb-3">
              Contact
            </h1>
            <p className="text-slate-300 font-normal text-base">
              524 Broadway , NYC
            </p>
            <p className="text-slate-300 font-normal text-base">
              +1 777 - 978 - 5570
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between pt-11">
          <p className="text-slate-400">
            @2023 Tech Titans. All Rights Reserved
          </p>
          <p className="text-slate-400">Powered by Tech Titans</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
