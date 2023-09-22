import React from "react";
import GamesDetails from "../../GamesDetails";

const Description = ({ gameDetails }) => {
  const {
    description,
    extraImage,
    features,
    languageSupport,
    tags,
    systemSupport,
    modes,
    extraText,
    screenshots,
  } = gameDetails;
  if (!gameDetails || !gameDetails.description || !gameDetails.extraImage) {
    return <div>Loading or error message...</div>;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-12">About This Game</h2>
      <div className="max-w-7xl mx-auto md:flex md:px-0 px-4 gap-4 items-center">
        <div className="md:w-3/5 ">
          <div>
            <h3 className="text-2xl font-bold">
              {description.descriptionTitle1}
            </h3>
            <p>{description.description1}</p>
          </div>
          <div className="items-center my-6 gap-4">
            <div>
              <h3 className="text-2xl font-bold">
                {description.descriptionTitle2}
              </h3>
              <p>{description.description2}</p>
            </div>
            <div className="md:flex gap-2">
              <img className="md:w-1/2 h-full" src={extraImage.image1} alt="" />
              <img className="md:w-1/2 h-full" src={extraImage.image2} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {description.descriptionTitle3}
            </h3>
            <p>{description.description3}</p>
          </div>
        </div>
        <div className="md:w-2/5 text-center">
          <div>
            <h2 className="text-2xl font-bold text-center">Top Features</h2>
            {features.map((items) => (
              <div className="border p-4">
                <p className="text-xl font-bold">{items}</p>
              </div>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-center">Modes</h2>
            <div className="flex">
              {modes.map((items) => (
                <div className="border w-full py-2">
                  <p className="text-xl font-bold">{items}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="my-6">
            <h2 className="text-2xl font-bold text-center">
              Supported Language
            </h2>
            <div className="flex">
              {languageSupport.map((items) => (
                <div className="border w-full py-2">
                  <p className="text-xl font-bold">{items}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="my-2">
            <div className=" bg-red-500 bg-opacity-30 font-bold text-xl ">
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
                      {systemSupport && systemSupport.multiplayer
                        ? "Yes"
                        : "No"}
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
          <div>
            <h2 className="text-2xl font-bold">Tags</h2>
            <div className="flex items-center justify-center">
              {tags.map((items) => (
                <div className="border w-full py-2">
                  <p className="text-xl font-bold">{items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto my-5">
        <h2 className="text-2xl font-bold text-center">Screenshots</h2>
        <div className="grid md:grid-cols-5 md:px-0 px-4 gap-10">
          {screenshots.map((items) => (
            <div className="border">
              <img className="w-full" src={items} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex md:px-0 px-4 max-w-7xl mx-auto py-10 rounded-md overflow-hidden shadow-md">
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-opacity-10 to-opacity-20"></div>
          <img
            src={extraImage.image4}
            alt="Game Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6 bg-opacity-75 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">{extraText.extraTitle}</h2>
          <p className=" mb-4">{description.description3}</p>
          <div className="">
            <button className="custom-button  text-black py-3 px-4 rounded-md transition duration-300 hover:bg-yellow-500 transform hover:scale-105 w-full">
              Visit Tournaments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
