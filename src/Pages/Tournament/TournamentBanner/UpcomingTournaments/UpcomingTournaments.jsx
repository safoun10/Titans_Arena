import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaGamepad, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const UpcomingTournaments = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("Fixered.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const upcomingMatches = data.filter(
    (match) => match.result && match.result.winner === "upcoming"
  );

  const visibleData = showAll ? upcomingMatches : upcomingMatches.slice(0, 4);

  return (
    <div>
      <div className="mt-28 mb-28 max-w-7xl mx-auto">
        <div className="flex justify-between mx-9">
          <div className="border-l-2 font-extrabold sm:text-lg md:text-3xl mb-10 text-yellow-500 border-t-2 rounded-md border-green-400 p-2 uppercase">
            <h3>Upcoming Matches</h3>
          </div>
          <div className="">
            <h3>
              <button
                onClick={toggleShowAll}
                className="flex gap-2 border text-yellow-400  rounded border-green-400 hover:text-green-500 hover:border-yellow-400 p-1 font-bold font-mono"
              >
                VIEW {showAll ? "LESS" : "ALL"} MATCHES
                <span className="mt-1 animate-pulse">
                  <FaArrowAltCircleRight />
                </span>
              </button>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
          {visibleData.map((match) => (
            <div key={match.id} card={match}>
              <div
                style={{
                  backgroundColor: "#121a23",
                  backgroundImage:
                    "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
                }}
                className="bg-black border-2  border-black p-1 shadow-md mb-14 h-[350px] w-72 rounded-md"
              >
                <div className="flex justify-center items-center leading-none">
                  <img
                    src={match.tournamentPicture}
                    alt="pic"
                    className="h-44 border-4 border-black w-60 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                  />
                </div>
                <div className="p-3 ">
                  <p>
                    date {match.matchDate} time {match.matchTime}-
                    <span className="text-green-500">
                      {" "}
                      {match.matchLocation}
                    </span>
                  </p>

                  <p className="block mb-1 text-2xl font-extrabold text-yellow-400">
                    {match.tournamentName}
                  </p>

                  <div className="flex  mb-10 justify-between ">
                    <div className="flex  text-xl font-semibold gap-1 text-white">
                      <FaPeopleGroup className="mt-1" />

                      <p>
                        <span> {match.teamPlayer}</span>
                      </p>
                    </div>
                    <div className="flex text-xl font-semibold gap-1 text-white">
                      <FaTv className="mt-1" />

                      <p>
                        <span> {match.views}</span>
                      </p>
                    </div>
                    <div className="flex text-xl font-semibold gap-1 text-white">
                      <FaGamepad className="mt-1" />
                      <p>
                        <span> {match.gamingMoode}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 ">
                  <img
                    src={match.authorImage}
                    alt=""
                    className="rounded-full h-7"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingTournaments;
