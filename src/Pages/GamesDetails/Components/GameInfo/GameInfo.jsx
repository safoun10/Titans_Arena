import React from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./GameInfo.css";
const GameInfo = ({ gameDetails }) => {
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
  if (
    !gameDetails ||
    !gameDetails.minimumRequirements ||
    !gameDetails.recommendedRequirements
  ) {
    return <div>Loading or error message...</div>;
  }
  return (
    <div className="just-gamers-bg h-[700px]">
      <div className="mt-20">
        <Title secondaryText="SYSTEM REQUIREMENTS" />
      </div>
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="w-2/6">
          <h2 className="text-4xl mb-2 font-bold">MINIMUM</h2>
          <div className="space-y-1 text-xl ">
            <p className="text-yellow-400 font-bold text-3xl">OS:</p>
            <p className="">{minimumRequirements.OS}</p>
            <p className="text-yellow-400 font-bold text-3xl">Processor:</p>
            <p className="">{minimumRequirements.Processor}</p>
            <p className="text-yellow-400 font-bold text-3xl">Memory:</p>
            <p className="">{minimumRequirements.Memory}</p>
            <p className="text-yellow-400 font-bold text-3xl">Graphics:</p>
            <p className="">{minimumRequirements.Graphics}</p>
            <p className="text-yellow-400 font-bold text-3xl">Storage:</p>
            <p className="">{minimumRequirements.Storage}</p>
          </div>
        </div>
        <div className="w-2/6 ml-16 flex justify-center">
          <img
            className=""
            src="https://themepixer.com/demo/html/geco/Geco/img/images/just_gamers_img.png"
            alt=""
          />
        </div>
        <div className="text-end w-2/6">
          <h2 className="text-4xl mb-2 font-bold">RECOMMENDED</h2>
          <div className="space-y-1 text-xl">
            <p className="text-yellow-400 font-bold text-3xl">OS: </p>
            <p>{recommendedRequirements.OS}</p>
            <p className="text-yellow-400 font-bold text-3xl">Processor: </p>
            <p>{recommendedRequirements.Processor}</p>
            <p className="text-yellow-400 font-bold text-3xl">Memory: </p>
            <p>{recommendedRequirements.Memory}</p>
            <p className="text-yellow-400 font-bold text-3xl">Graphics: </p>
            <p>{recommendedRequirements.Graphics}</p>
            <p className="text-yellow-400 font-bold text-3xl">Storage: </p>
            <p>{recommendedRequirements.Storage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
