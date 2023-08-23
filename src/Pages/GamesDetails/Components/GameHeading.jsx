import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
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
      <div className="flex max-w-7xl items-center mx-auto gap-5 py-20">
        <div className="w-3/6">
          <img className=" h-[24rem] bg" src={image} alt="" />
        </div>
        <div className="w-2/6">
          <h1 className="text-5xl font-bold tracking-[0.1rem]">{title}</h1>
          <div className="flex gap-32 ">
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
        <div className="w-2/6">
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
        </div>
      </div>
    </div>
  );
};

export default GameHeading;
