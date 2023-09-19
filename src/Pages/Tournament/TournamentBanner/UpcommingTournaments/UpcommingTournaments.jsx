import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaArrowAltCircleRight,
  FaCamera,
  FaGamepad,
  FaTv,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const PopularTournaments = () => {
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
        {visibleData.map((match) => (
          <div key={match.id} card={match}>
            <div
              style={{
                backgroundColor: "#121a23",
                backgroundImage:
                  "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
              }}
              className="bg-black border-2 text-center border-black shadow-md mb-14 w-[315px] h-[400px] relative   rounded-md"
            >
              <div className="flex justify-center items-center leading-none">
                <img
                  src={match.tournamentPicture}
                  alt="pic"
                  className="h-48 w-10/12 border-2 border-black rounded-md shadow-2xl  transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                />
              </div>
              <div className="px-3">
                <div className="my-2">
                  <p className="block  text-2xl font-extrabold text-yellow-400">
                    {match.tournament_name}
                  </p>
                </div>
                <div className=" mb-2 mt-2 flex ">
                  <div className="w-1/2">
                    <p className="  font-bold">
                      Organizer : <br />
                      {match.organizer_name}
                    </p>
                  </div>
                  <div>
                    <p className=" font-semibold">
                      date {match.start_date}
                    </p>
                    <p className=" font-semibold">
                      time {match.matchTime}-{match.location}
                    </p>
                  </div>
                </div>

                <div className="flex max-w-xs mx-auto  px-2 justify-between ">
                  <div className="flex text-xl font-semibold gap-1 text-white">
                    <FaPeopleGroup className="mt-1" />

                    <p>
                      <span> {match.totalTeam}</span>
                    </p>
                  </div>
                  <div className="flex text-xl font-semibold gap-1 text-white">
                    <FaTv className="mt-1" />

                    <p>
                      <span> {match.matchStage}</span>
                    </p>
                  </div>
                  <div className="flex text-xl font-semibold gap-1 text-white">
                    <FaGamepad className="mt-1" />
                    <p>
                      <span> {match.gamingMoode}</span>
                    </p>
                  </div>
                  <div className="flex text-xl font-semibold gap-1 text-white">
                    <FaGamepad className="mt-1" />
                    <p>
                      <span> {match?.enrolled || 0}</span>
                    </p>
                  </div>
                </div>
                {/* <div className="absolute  -bottom-5">
                  <button className="custom-button hover:translate-x-4  py-3 px-5">
                  Enroll Now Thi Tournament
                  </button>
                </div> */}
              </div>
              <div className="text-center">
                <button className="custom-button my-5 hover:translate-x-4  py-3 px-10">
                  Enroll Now This Tournament
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTournaments;
