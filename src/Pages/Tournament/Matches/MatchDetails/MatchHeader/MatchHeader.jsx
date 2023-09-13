import React from "react";
import "./MatchHeader.css";
import { FaArrowCircleRight, FaVideo } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MatchHeader = ({ matchDetails }) => {
  console.log(matchDetails);
  const {
    result,

    tournamentName,
    team2,
    team1,
    tournamentPicture,
  } = matchDetails;
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
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          TOURNAMENT
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
      <div className="esproot ">
        <section
          className=" matchHeader  "
          id="home"
          aria-label=""
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.1)), url('https://img3.wallspic.com/crops/9/3/9/4/6/164939/164939-game_for_peace-esports-world-entertainment-gesture-3840x1920.jpg')`,
          }}
        >
          <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
            <div className="flex justify-between  items-stretch flex-row">
              <div className="">
                <div className="hidden md:block border-b-yellow-500 border-b-2 h-44    rounded-full  bg-opacity-70 md:h-60 xl:h-72 ">
                  <img
                    className="hidden h-full rounded-b-full rounded-full xl:block"
                    src="https://i.ibb.co/h9yttXs/pngwing-com-22.png"
                    alt="pexels-dmitry-zvolskiy-2082090-1"
                  />
                  <img
                    className="xl:hidden rounded-full    h-full"
                    src="https://i.ibb.co/h9yttXs/pngwing-com-22.png"
                    alt="pexels-dmitry-zvolskiy-2082090-1-1"
                  />
                </div>
              </div>
              <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-10 px-10 md:px-0 md:py-0  mx-16  w-full  ">
                <div className="xl:mt-4 mt-2 text-2xl text-white mb-5 xl:text-1xl mx-auto font-semibold leading-9  w-full ">
                  <div>
                    <p className="text-3xl text-yellow-400 mb-5 xl:text-6xl font-semibold leading-9 ">
                      {tournamentName}
                    </p>
                  </div>
                  <h1>
                    {team1?.name} <span className="text-yellow-400">VS </span>{" "}
                    {team2?.name}
                  </h1>
                  <h1 className="animate-bounce">
                    Winner: {result?.winner}, Score: {result?.score}
                  </h1>

                  <button className="animate-ping text-yellow-500 hover:underline  ">
                    WATCH LIVE STREAM
                  </button>
                  <div className=" mt-10   hidden lg:flex">
                    <ul className="flex gap-10  text-xs">{navOptions}</ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block h-44    rounded-full border-b-yellow-500 border-b-2 bg-opacity-70 md:h-60 xl:h-72">
                <img
                  className="hidden h-full rounded-b-full rounded-full xl:block"
                  src="https://i.ibb.co/pXp4M9J/pngwing2222-com.png"
                  alt="pexels-dmitry-zvolskiy-2082090-1"
                />
                <img
                  className="xl:hidden rounded-b-full     h-full"
                  src="https://i.ibb.co/pXp4M9J/pngwing2222-com.png"
                  alt="pexels-dmitry-zvolskiy-2082090-1-1"
                />
              </div>
            </div>
            <div className="hidden mt-6 w-full">
              <img
                src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
                alt="pexels-dmitry-zvolskiy-2082090-1"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MatchHeader;
