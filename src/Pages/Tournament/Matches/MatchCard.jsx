import React from "react";
import { FaTimes, FaTimesCircle, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MatchCard = ({ match }) => {
  return (
    <Link to={`/espMatchFixered/${match._id}`}>
      <div className="bg-[url('')]">
        <div
          style={{
            backgroundColor: "#121a23",
            backgroundImage:
              "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
          }}
          className="lg:max-w-4xl border-l-2 border-r-2  border-r-yellow-400 border-dotted   hover:border-t-2 border-yellow-400  border-l-yellow-500 h-32 items-center mt-5 md:max-w-[696px] sm:max-w-[343px] mx-auto bg-black bg-opacity-60 lg:px-10 md:px-6 px-4 py-4 rounded-full uppercase "
        >
          <div className="flex   ">
            <div className="items-center mx-auto  gap-6 flex">
              <div className="w-28 border-r-2 border-l-2 border-yellow-400 p-3 rounded-full hidden md:block h-24 mx-auto">
                <img
                  src={match.team1.team1Logo}
                  alt={match.team1.name}
                  className="lg:block md:hidden hidden"
                />
                <img
                  src={match.team1.team1Logo}
                  alt={match.team1.name}
                  className="lg:hidden md:block hidden"
                />
              </div>

              <div>
                <h1 className="md:text-2xl sm:text-xl  font-bold text-yellow-400">
                  {" "}
                  {match.team1.name}
                </h1>
                <p className="flex gap-2 text-green-400">
                  Watch <FaTwitch className="mt-1" />{" "}
                  <FaYoutube className="mt-1" />{" "}
                </p>
              </div>
            </div>
            {/* ------------------ */}
            <div className="lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
              <p className=" md:text-3xl sm:text-xl font-semibold text-center text-white"></p>
              <p className=" animate-bounce text-yellow-400  sm:text-1xl md:text-3xl  font-semibold text-center ">
                {match.result.score}
              </p>
              <p className=" md:text-xl sm:text-lg text-xl font-semibold text-center text-white"></p>
              <p
                className="sm:text-xs md:text-1xl font-bold
             uppercase  text-center text-white"
              >
                Winner:{" "}
                {match.result.winner === "upcoming"
                  ? "Upcoming"
                  : match.result.winner}
              </p>
              <div>
                <p> {match.matchDate}</p>
              </div>
            </div>
            <div className="items-center  text-center mx-auto  gap-6 flex">
              <div>
                <h1 className="md:text-2xl sm:text-xl  font-bold text-yellow-400">
                  {" "}
                  {match.team2.name}
                </h1>
                <p className="flex gap-2 text-green-400">
                  Watch <FaTwitch className="mt-1" />{" "}
                  <FaYoutube className="mt-1" />{" "}
                </p>
              </div>
              {/* ------------------------- */}

              <div className="w-28 hidden border-l-2 rounded-full p-3 border-r-2 border-yellow-400 md:block h-24 mx-auto">
                <img
                  src={match.team2.team2Logo}
                  alt={match.team2.name}
                  className="lg:block md:hidden block"
                />
                <img
                  src={match.team2.team2Logo}
                  alt={match.team2.name}
                  className="lg:hidden md:block hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
