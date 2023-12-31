import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GameHeading.css";
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
    website,
    tags,
    languageSupport,
    minimumRequirements,
    recommendedRequirements,
    features,
    systemSupport,
    category,
  } = gameDetails;

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-7xl  mx-auto gap-5 py-20">
        <div className=" lg:flex-none  flex justify-center">
          <img className=" h-[24rem] bg" src={image} alt="" />
        </div>
        <div className="lg:mt-20">
          <h1 className="lg:text-3xl text-green-400 text-2xl font-bold tracking-[0.1rem]">
            {title}
          </h1>
          <div className="flex gap-32 lg:ml-0 ml-5 lg:pt-0 pt-5">
            <div>
              <div>
                <p className="text-gray-400 font-semibold">Category</p>
                <p className="text-xl font-bold">{category}</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Developer</p>
                <p className="text-xl font-bold">{developer}</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Publisher</p>
                <p className="text-xl font-bold">{publisher}</p>
              </div>
            </div>
            <div>
              <div>
                <p className="text-gray-400 font-semibold">Rating</p>
                <p className="text-xl font-bold flex gap-1 items-center">
                  {" "}
                  <FaStar /> {rating}
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">ReleaseDate</p>
                <p className="text-xl font-bold">{releaseDate}</p>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Age Rating</p>
                <p className="text-xl font-bold">{ageRating}</p>
              </div>
            </div>
          </div>
          <div className="pt-3 lg:pl-0 pl-40">
            <p className="text-gray-400 font-semibold">PLATFORMS</p>
            <div className="text-xl font-bold">
              {platforms ? (
                <ul className="flex gap-2">
                  {platforms.map((platform, index) => (
                    <li key={index}>
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
        <div className="lg:mt-24 lg:mr-5">
          <div className=" bg-red-500 bg-opacity-30 font-bold ">
            <table className="w-full  ">
              <thead>
                <tr className=" text-white bg-red-500">
                  <td className="py-2 px-4 ">System Support</td>
                  <td className="py-2 px-4 ">Mark</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Multiplayer</td>
                  <td className="py-2 px-4">
                    {" "}
                    {systemSupport && systemSupport.multiplayer ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Cloud Save</td>
                  <td className="py-2 px-4">
                    {" "}
                    {systemSupport && systemSupport.cloudSave ? "Yes" : "No"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Cross Platform Play</td>
                  <td className="py-2 px-4">
                    {" "}
                    {systemSupport && systemSupport.crossPlatformPlay
                      ? "Yes"
                      : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5  text-center">
            <h3 className="text-3xl mb-2 font-bold">For More Information</h3>
            <Link to={website}>
              <button className="custom-button py-3 px-5">
                Visit Official Website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeading;
