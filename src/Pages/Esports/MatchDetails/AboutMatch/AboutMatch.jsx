import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import aboutPic from "../../../../../public/EsportsPic/animation_llylw6vz (1).json";
import { FiArrowRight } from "react-icons/fi"; // Import the React Icons for the arrow icon

const AboutMatch = () => {
  const matches = [
    {
      matchID: 1,
      tournamentName: "ESL Pro League",
      matchDate: "2023-09-15",
      matchTime: "15:00",
      matchLocation: "Los Angeles, CA",
      matchDescription:
        "An intense battle between Team Alpha and Team Beta in the ESL Pro League Quarterfinals. Who will emerge victorious?",
      matchWinner: "Team Alpha",
      matchScore: "2-1",
      streamURL: "https://twitch.tv/esports_stream",
    },
  ];

  return (
    <div>
      <div className="bg-black bg-opacity-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
          <div className="z-30 relative lg:w-1/2 border border-e-2 rounded-e-3xl rounded-s-3xl border-s-yellow-400  border-r-yellow-400 border-t-green-500">
            <div className="hidden rounded-3xl dark:bg-black bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div className="w-full lg:w-auto lg:-mr-32">
                <img
                  className="w-full relative z-30 lg:pl-20 px-6 py-14"
                  src="https://cdn-3.expansion.mx/dims4/default/cedb37a/2147483647/strip/true/crop/724x483+0+0/resize/1800x1201!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F4d%2Fa8%2Fa75fa9ce4e7d931ae1d16acb2639%2Fistock-1354761874.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute top-0 rounded-3xl dark:bg-gray-900 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
              {/* <Player
                className="w-full relative z-30 lg:pl-20 px-6 py-14"
                autoplay
                loop
                src={aboutPic}
              ></Player> */}
              <img
                className="w-full relative z-30 lg:pl-20 px-6 py-14"
                src="https://cdn-3.expansion.mx/dims4/default/cedb37a/2147483647/strip/true/crop/724x483+0+0/resize/1800x1201!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F4d%2Fa8%2Fa75fa9ce4e7d931ae1d16acb2639%2Fistock-1354761874.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bg-yellow-200 border-b-2 rounded-b-3xl dark:bg-black rounded-t-3xl lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              {matches.map((match) => (
                <div
                  key={match.matchID}
                  className="border-b-2 border-yellow-400 mb-6 pb-6"
                >
                  <h1 className="text-3xl font-semibold text-yellow-500 uppercase hover:text-green-500">
                    {match.tournamentName}
                  </h1>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="col-span-1">
                      <p className="text-lg  text-gray-100 dark:text-gray-100">
                        Date: {match.matchDate}
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-100">
                        Time: {match.matchTime}
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-100">
                        Location: {match.matchLocation}
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-lg text-gray-600 dark:text-gray-100 ">
                        Winner: {match.matchWinner}
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-100 animate-bounce">
                        Score:{" "}
                        <span className=" text-yellow-400">
                          {match.matchScore}
                        </span>
                      </p>
                      <a
                        href={match.streamURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="active border border-yellow-400 rounded-md dark:hover:bg-yellow-400 dark:hover:text-gray-100 sm:w-auto w-full mt-2 text-lg justify-between focus:ring-2 focus:ring-offset-2 font-medium leading-none text-white py-2 px-4 flex items-center"
                      >
                        Watch Stream
                        <div className="ml-2 mt-0.5">
                          <FiArrowRight size={16} />
                        </div>
                      </a>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-100 mt-4">
                    Description: {match.matchDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMatch;
