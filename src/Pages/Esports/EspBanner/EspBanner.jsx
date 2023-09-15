import React from "react";
import {
  FaArrowCircleRight,
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import bannerPic from "../../../../public/EsportsPic/sponsored/animation_lmfz2l93.json";
import { Player } from "@lottiefiles/react-lottie-player";

const EspBanner = () => {
  const navOptions = (
    <>
      <li className="nav-link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <div className="flex items-center gap-1">
            HOME <FaArrowCircleRight />
          </div>
        </NavLink>
      </li>

      <li className="nav-link">
        <NavLink
          to="/allgame"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <div className="flex items-center gap-1">
            Games <FaArrowCircleRight />
          </div>
        </NavLink>
      </li>

      <li className="nav-link">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Esports
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className=" bg-[url('https://c0.wallpaperflare.com/preview/153/380/988/headphones-red-black-dark.jpg')] border-black   border-b-4">
        <div className="px-3 py-12">
          <div className="lg:max-w-7xl mt-20 md:max-w-[696px] max-w-[343px] mx-auto rounded-lg bg-slate-800 bg-opacity-80  md:px-6  py-12">
            <div className="lg:flex items-center  md:flex block">
              <div className="flex">
                <div>
                  <img
                    src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
                    alt="shoes"
                    className="lg:hidden md:hidden block"
                  />
                </div>
              </div>

              <div className="w-1/2 bg-black border rounded-3xl ">
                <Player
                  className="w-1/2 lg:block md:hidden hidden"
                  autoplay
                  loop
                  src={bannerPic}
                  // style={{ height: "500px", width: "700px" }}
                ></Player>

                <Player
                  className="w-1/2 lg:hidden md:block hidden"
                  autoplay
                  loop
                  src={bannerPic}
                  // style={{ height: "500px", width: "700px" }}
                ></Player>
              </div>
              <div className=" border border-green-400 lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-5xl md:text-2xl text-2xl font-semibold text-center text-white">
                  WelcomeTo<span className="text-green-500">Esports </span>{" "}
                  <br />
                  <span className="text-yellow-400"> Tournaments </span>
                </p>

                <div className=" mt-10   hidden lg:flex">
                  <ul className="flex gap-10  text-xs">{navOptions}</ul>
                </div>

                <p className="text-lg text-center  pt-2 flex gap-5 mt-2 text-green-400 ">
                  <FaTwitch /> <FaYoutube /> <FaInstagram /> <FaFacebook />
                </p>
                <p className="mt-3 font-bold text-white">
                  {" "}
                  PLAY <span className="text-red-500">TO </span>WIN
                </p>
              </div>
              <div className="w-1/2 border mx-auto">
                <img
                  src="https://media.istockphoto.com/id/1354761874/photo/team-of-professional-cybersport-gamers-celebrating-success-in-gaming-club.webp?b=1&s=170667a&w=0&k=20&c=4gCya57DLD47YerrSNj7Bo4u6aqJRE3Mm5zSIePRxsA="
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://media.istockphoto.com/id/1354761874/photo/team-of-professional-cybersport-gamers-celebrating-success-in-gaming-club.webp?b=1&s=170667a&w=0&k=20&c=4gCya57DLD47YerrSNj7Bo4u6aqJRE3Mm5zSIePRxsA="
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default EspBanner;
