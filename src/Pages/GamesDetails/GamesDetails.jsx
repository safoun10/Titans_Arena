import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import Comments from "./Components/Comment/Comment";
import GameHeading from "./Components/GameHeading";
import GameInfo from "./Components/GameInfo/GameInfo";
import RealLinks from "./Components/RealLinks/RealLinks";
import TestCompo from "./Components/TestCompo/TestCompo";
import "./GamesDetails.css";

const GamesDetails = () => {
  const [gameDetails, setGameDetails] = useState({});
  const {
    _id,
    image,
    review,
    title,
    level,
    genre,
    description,
    rating,
    platforms,
    releaseDate,
    developer,
    publisher,
    ageRating,
    modes,
    tags,
    languageSupport,
    minimumRequirements,
    recommendedRequirements,
    features,
    systemSupport,
    category,
  } = gameDetails;

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://titans-arena-server.vercel.app/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGameDetails(data));
  }, []);

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
            All Games <FaArrowCircleRight />
          </div>
        </NavLink>
      </li>

      <li className="nav-link">
        <NavLink
          to={`/games/${_id}`}
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          {title}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="text-white">
      <div className="bg-[url('https://demo.gloriathemes.com/wp/cloux/wp-content/uploads/2017/12/tw-bg-1920x450.jpg')] bg-cover ">
        <div
          style={{
            background:
              "radial-gradient(310.48% 100.00% at 50.00% 0.00%, rgba(128, 0, 128, 0.53) 5.96%, rgba(29, 35, 52, 0.47) 89.85%, #08090A 99.66%)",
            /* add other styles here if needed */
          }}
          className=" h-[350px] flex items-center"
        >
          <div>
            <div>
              <div className="navbar-center  hidden lg:flex">
                <ul className="flex gap-4 text-xs">{navOptions}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GameHeading gameDetails={gameDetails} />
      </div>

      <div>
        <GameInfo gameDetails={gameDetails} />
        <RealLinks />
      </div>
      <div className="flex rounded-md overflow-hidden shadow-md">
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-opacity-10 to-opacity-20"></div>
          {/* Replace 'your-image-url' with the actual image URL */}
          <img
            src="https://atvargyt.com/demo/HTML/wicodus/assets/img/content/carousel/slide_01.jpg"
            alt="Game Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 bg-opacity-75 bg-black text-white flex flex-col justify-center">
          <h2 className="text-2xl mb-2">Game Title</h2>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            rhoncus augue.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md transition duration-300 hover:bg-yellow-500 transform hover:scale-105">
            Play Now
          </button>
        </div>
      </div>
      <TestCompo />
      <Comments/>
    </div>
  );
};

export default GamesDetails;
