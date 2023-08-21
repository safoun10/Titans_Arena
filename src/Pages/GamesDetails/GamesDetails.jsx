import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
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
      <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/breadcrumb_bg01.jpg')] bg-cover ">
        <div
          style={{
            background:
              "radial-gradient(310.48% 100.00% at 50.00% 0.00%, rgba(128, 0, 128, 0.53) 5.96%, rgba(29, 35, 52, 0.47) 89.85%, #08090A 99.66%)",
            /* add other styles here if needed */
          }}
          className=" h-[350px] flex items-center"
        >
          <div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <h3 className="text-2xl font-bold">Genre: {category}</h3>
            <h3 className="text-2xl font-bold">Pulisher: {publisher}</h3>
            <div>
              <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 text-xs">{navOptions}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
