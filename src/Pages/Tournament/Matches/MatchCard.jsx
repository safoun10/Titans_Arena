import React from "react";
import { FaTwitch, FaYoutube } from "react-icons/fa";

const MatchCard = ({ match }) => {
  return (
    <div className="bg-[url('')]">
      <div
        style={{
          backgroundColor: "#121a23",
          backgroundImage:
            "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
        }}
        className="lg:max-w-5xl border-l-2 border-r-2  border-r-yellow-400 border-dotted   hover:border-t-2 border-yellow-400  border-l-yellow-500 h-32 items-center mt-5 md:max-w-[696px] sm:max-w-[343px] mx-auto bg-black bg-opacity-60 lg:px-10 md:px-6 px-4 py-4 rounded-full uppercase "
      >
        <div className="lg:flex md:flex block">
          <div className="items-center mx-auto  gap-10 flex">
            <div className="w-28 h-28 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img
                src={match.team1.team1Logo}
                alt={match.team1.name}
                className=""
              />
            </div>

            <div>
              <h1 className="text-3xl sm:text-xl md:text-2xl font-bold text-yellow-400">
                {" "}
                {match.team1.name}
              </h1>
              <p className="flex gap-2 text-green-400">
                Watch <FaTwitch className="mt-1" />{" "}
                <FaYoutube className="mt-1" />{" "}
              </p>
            </div>
          </div>
          <div className="lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
            <p className="lg:text-4xl md:text-2xl sm:text-xl text-2xl font-semibold text-center text-white">
              {/* {match.team1.name} vs. {match.team2.name} */}
            </p>
            <p className="lg:text-3xl animate-bounce text-yellow-400 md:text-xl sm:text-lg text-xl font-semibold text-center ">
              {match.result.score}
            </p>
            <p className="lg:text-2xl md:text-xl sm:text-lg text-xl font-semibold text-center text-white">
              {/* Date: {match.matchDate} */}
            </p>
            <p className="text-md sm:text-sm uppercase font-semibold text-center text-white">
              Winner:{" "}
              {match.result.winner === "upcoming"
                ? "Upcoming"
                : match.result.winner}
            </p>
            <div>
              <p> {match.time}</p>
            </div>
          </div>
          <div className="items-center mx-auto  gap-10 flex">
            <div>
              <h1 className="text-3xl sm:text-xl md:text-2xl font-bold text-yellow-400">
                {" "}
                {match.team2.name}
              </h1>
              <p className="flex gap-2 text-green-400">
                Watch <FaTwitch className="mt-1" />{" "}
                <FaYoutube className="mt-1" />{" "}
              </p>
            </div>

            <div className="w-28 h-28 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img
                src={match.team2.team2Logo}
                alt={match.team2.name}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
