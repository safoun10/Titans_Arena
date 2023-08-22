import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const GameHeading = ({ gameDetails }) => {
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
  return (
    <div className="bg-[url('https://themepixer.com/demo/html/geco/Geco/img/bg/breadcrumb_bg.jpg')]">
      <div className="flex max-w-6xl items-center mx-auto gap-5 py-20">
        <div className="w-1/4">
          <img className=" h-[24rem] bg" src={image} alt="" />
        </div>
        <div className="w-3/4">
          <h1 className="text-5xl font-bold tracking-[0.1rem]">{title}</h1>
          <div className="flex gap-5">
            <div>
              <div className="">
                <p className="text-gray-400 font-semibold">Category</p>
                <p className="text-xl font-bold">{category}</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-semibold">Developer</p>
                <p className="text-xl font-bold">{developer}</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-semibold">Publisher</p>
                <p className="text-xl font-bold">{publisher}</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-semibold">PLATFORMS</p>
                <div className="text-xl font-bold">
                  {platforms ? (
                    <ul className="flex gap-2">
                      {platforms.map((platform, index) => (
                        <li key={index} className="">
                          <p className="btn2 btn-style-two"> {platform}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No platforms available</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="">
                <p className="text-gray-400 font-semibold">Rating</p>
                <p className="text-xl font-bold flex gap-1 items-center">
                  {" "}
                  <FaStar /> {rating}
                </p>
              </div>
              <div className="">
                <p className="text-gray-400 font-semibold">ReleaseDate</p>
                <p className="text-xl font-bold">{releaseDate}</p>
              </div>
              <div className="">
                <p className="text-gray-400 font-semibold">Age Rating</p>
                <p className="text-xl font-bold">{ageRating}</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeading;
