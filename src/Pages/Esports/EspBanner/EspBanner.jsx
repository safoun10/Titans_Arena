import React from "react";
import {
  FaArrowCircleRight,
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
      <div className=" bg-[url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700458045.jpg')] border-b-green-600 border-b-2">
        <div className="px-3 py-12">
          <div className="lg:max-w-[1280px] mt-5 md:max-w-[696px] max-w-[343px] mx-auto bg-black bg-opacity-60  lg:px-20 md:px-6 px-4 py-12">
            <div className="lg:flex md:flex block">
              <div className="flex">
                <div className="bg-black  max-w-[66px] w-full border border-yellow-400 ">
                  <p className="xl:text-1xl font-bold lg:text-base  leading-normal text-white -rotate-90 whitespace-nowrap  2xl:mt-32 xl:mt-[130px]  lg:mt-[140%] md:mt-[85px] mt-28">
                    JOIN NOW HERE
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
                    alt="shoes"
                    className="lg:hidden md:hidden block"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <img
                  src="https://escorenews.com/media/news/n44082.jpeg"
                  alt="shoes"
                  className="lg:block md:hidden hidden"
                />
                <img
                  src="https://escorenews.com/media/news/n44082.jpeg"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div className="bg- lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                  WelcomeTo<span className="text-green-500">Esports </span>{" "}
                  <br />
                  <span className="text-yellow-400"> </span>
                </p>

                <div className=" mt-10   hidden lg:flex">
                  <ul className="flex gap-10  text-xs">{navOptions}</ul>
                </div>

                <p className="text-lg text-center  pt-2 flex gap-5 mt-2 text-green-400 ">
                  <FaTwitch /> <FaYoutube /> <FaInstagram /> <FaFacebook />
                </p>
                <p className="mt-3 animate-bounce font-bold text-white">
                  {" "}
                  PLAY <span className="text-red-500">TO </span>WIN
                </p>
              </div>
              <div className="w-1/2 mx-auto">
                <img
                  src="https://thesmartsource.com/wp-content/uploads/2019/08/Video-game-tournament-1024x683.jpg"
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://thesmartsource.com/wp-content/uploads/2019/08/Video-game-tournament-1024x683.jpg"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center items-center flex justify-center mt-5 text-1xl gap-7">
        <div className="">
          <h1 className=" shadow-sm hover:border-green-400 hover:text-white w-10 font-bold text-yellow-400 hover: border-b-2 hover:border-b-0 hover:border-t-2">
            PUBG{" "}
          </h1>
        </div>
        <div className="">
          <h1 className=" shadow-sm hover:border-green-400 hover:text-white w-10 font-bold text-red-600 hover: border-b-2 hover:border-b-0 hover:border-t-2 ">
            WOW{" "}
          </h1>
        </div>
        <div className="">
          <h1 className=" shadow-sm hover:border-green-400 hover:text-white w-10 font-bold text-green-400 hover: border-b-2 hover:border-b-0 hover:border-t-2">
            DOTA2{" "}
          </h1>
        </div>
        <div className="">
          <h1 className=" shadow-sm hover:border-green-400 hover:text-white w-10 font-bold text-white hover: border-b-2 hover:border-b-0 hover:border-t-2">
            PUBG{" "}
          </h1>
        </div>
        <div className="">
          <h1 className=" shadow-sm hover:border-green-400 hover:text-white w-10 font-bold text-blue-600 hover: border-b-2 hover:border-b-0 hover:border-t-2">
            SFN2.0{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EspBanner;
