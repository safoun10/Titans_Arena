import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const RealLinks = ({ gameDetails }) => {
  const {
    description,
    extraImage,
    features,
    languageSupport,
    tags,
    systemSupport,
    modes,
    website,
    extraText,
    screenshots,
  } = gameDetails;
  return (
    <div className="py-4">
      <h1 className="text-5xl text-center font-bold">Get More Information</h1>
      <div className=" pb-6 pt-4 flex gap-4 text-2xl justify-center  ">
        <Link to={website}>
          <p className="  custom-button border rounded-md  p-4">Visit Now</p>
        </Link>
      </div>
      <h1 className="text-3xl text-center font-bold">Share This On</h1>
      <div className=" pb-6 pt-4 flex gap-4 text-2xl justify-center  ">
        <Link to="http://facebook.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/facebook.e96143e5.png"
            alt=""
          />
        </Link>
        <Link to="http://twitter.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/twitter.44ea9c7c.png"
            alt=""
          />
        </Link>
        <Link to="http://instagram.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/instagram.a89b5e48.png"
            alt=""
          />
        </Link>
        <Link to="http://youtube.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/youtube.a8224612.png"
            alt=""
          />
        </Link>
        <Link to="http://discord.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/discord.87b031fc.png"
            alt=""
          />
        </Link>
        <Link to="http://tiktok.com">
          <img
            className="w-14 h-14"
            src="https://asphalt9.assets.gameloft.com/static/_next/static/media/tiktok.cb61d741.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default RealLinks;
