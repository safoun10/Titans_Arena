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
     
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/facebook.e96143e5.png" alt="" />
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/twitter.44ea9c7c.png" alt="" />
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/instagram.a89b5e48.png" alt="" />
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/youtube.a8224612.png" alt="" />
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/discord.87b031fc.png" alt="" />
        <img className="w-14 h-14" src="https://asphalt9.assets.gameloft.com/static/_next/static/media/tiktok.cb61d741.png" alt="" />
      
      </div>
      
    </div>
  );
};

export default RealLinks;
