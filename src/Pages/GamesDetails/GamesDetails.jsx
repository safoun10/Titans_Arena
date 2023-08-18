import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
    fetch(`http://localhost:5000/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGameDetails(data));
  }, []);
  const divStyle = {
    background: 'radial-gradient(310.48% 100.00% at 50.00% 0.00%, rgba(0, 0, 0, 0.53) 5.96%, rgba(29, 35, 52, 0.47) 89.85%, #08090A 99.66%)',
    width: '100%',
    height: '100vh',
  };

  return (
    <div className="text-white">
        {/* banner section */}
      <div  className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/breadcrumb_bg01.jpg')] bg-cover h-[350px] flex items-center ">
        <div className="">
          <h2 className="text-4xl font-bold">{title}</h2>
          <h3 className="text-2xl font-bold">Genre: {category}</h3>
          <h3 className="text-2xl font-bold">Pulisher: {publisher}</h3>
        </div>
      </div>
      {/* banner end */}
      <div className="text-black">{ageRating}</div>
    </div>
  );
};

export default GamesDetails;
