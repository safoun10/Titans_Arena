import React from "react";
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareWhatsapp } from "react-icons/fa6";

const RealLinks = () => {
  return (
    <div className="bg-slate-900 py-4">
      <h1 className="text-5xl text-center">Get It From</h1>
      <div className=" pb-6 pt-4 flex gap-4 text-2xl justify-center  ">
        <p className="   bg-black rounded-md  p-4">Windows Store</p>
        <p className="   bg-black rounded-md  p-4">Google Play Store</p>
        <p className="   bg-black rounded-md  p-4">App Store</p>
      </div>
      <h1 className="text-3xl text-center">Share This On</h1>
      <div className=" pb-6 pt-4 flex gap-4 text-2xl justify-center  ">
        <p><FaSquareFacebook className="h-12 w-10 text-orange-400"/></p>
        <p><FaSquareInstagram className="h-12 w-10 text-orange-400"/></p>
        <p><FaSquareTwitter className="h-12 w-10 text-orange-400"/></p>
        <p><FaSquareWhatsapp className="h-12 w-10 text-orange-400"/></p>
      </div>
    </div>
  );
};

export default RealLinks;
