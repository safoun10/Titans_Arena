import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

import UpcommingTournamentsCard from "./UpcommingTournamentsCard";

const UpcommingTournaments = ({ user }) => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  console.log(data);

  useEffect(() => {
    axios
      .get("https://titans-arena-server.vercel.app/tournaments")
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

  const visibleData = showAll ? data : data.slice(0, 4);

  return (
    <div className="mt-28 mb-28  max-w-7xl mx-auto">
      <div className="flex justify-between mx-9">
        <div className="border-l-2 font-extrabold sm:text-lg md:text-3xl mb-10 text-yellow-500 border-t-2 rounded-md border-green-400 p-2 ">
          <h3>Our Upcomming Matches</h3>
        </div>
        <div className="">
          <h3>
            <button
              onClick={toggleShowAll}
              className="flex gap-2 border text-yellow-400  rounded border-green-400 hover:text-green-500 hover:border-yellow-400 p-1 font-bold font-mono"
            >
              VIEW {showAll ? "LESS" : "ALL"} LEAGUES
              <span className="mt-1 animate-pulse">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
        {visibleData.map((singleTournament) => (
          <UpcommingTournamentsCard
            user={user}
            singleTournament={singleTournament}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcommingTournaments;
