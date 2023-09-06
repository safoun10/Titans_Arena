import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const TournamentBanner = () => {
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
      <div className=" bg-[url('https://c0.wallpaperflare.com/preview/153/380/988/headphones-red-black-dark.jpg')] border-b-red-600 border-b-2">
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
              <div>
                <img
                  src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
                  alt="shoes"
                  className="lg:block md:hidden hidden"
                />
                <img
                  src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
                  alt
                  className="lg:hidden md:block hidden"
                />
              </div>
              <div className="bg- lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
                <p className="lg:text-4xl md:text-2xl text-2xl font-semibold text-center text-white">
                  WelcomeTo<span className="text-green-500">Esports </span>{" "}
                  <br />
                  <span className="text-yellow-400"> Tournaments </span>
                </p>

                <div className=" mt-10   hidden lg:flex">
                  <ul className="flex gap-10  text-xs">{navOptions}</ul>
                </div>

                <p className="text-xs text-center text-white pt-4">
                  Shop enchanting designs with bold and classy colors at
                  discunted price
                </p>
              </div>
              <div>
                <img
                  src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
                  alt="sandles"
                  className="lg:block md:hidden block"
                />
                <img
                  src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/20/1416478623158/344ec273-4c4b-42f1-adba-f1ec30f3581f-2060x1236.jpeg?width=465&dpr=1&s=none"
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

export default TournamentBanner;
