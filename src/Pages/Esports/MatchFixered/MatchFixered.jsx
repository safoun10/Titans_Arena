import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";

function MatchFixered() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    axios
      .get("http://localhost:5000/espMatchFixered")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData =
    activeTab === "upcoming"
      ? data.filter((item) => item.result === "upcoming")
      : activeTab === "results"
      ? data.filter((item) => typeof item.result === "object")
      : data;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-48">
        <div className="animate-bounce">
          <img
            className="w-24 mx-auto mt- transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            src="https://i.ibb.co/QQs83pz/pngwing-com-12.png"
            alt=""
          />
          <Title
            secondaryText="FIXTURED OF ESPORTS GAME"
            primaryText="Explore The Fixture"
          ></Title>
        </div>
      </div>

      <div
        className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] container mx-auto"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="tabs mb-4 bg-black w-1/2 mx-auto p-2 text-center gap-9 rounded-md border border-green-500 font-extrabold text-1xl">
          <button
            className={`${
              activeTab === "upcoming" ? "active" : ""
            } hover:text-yellow-400 border-b-2 border-b-yellow-400`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Matches
          </button>
          <button
            className={`${
              activeTab === "results" ? "active" : ""
            } hover:text-yellow-400 border-b-2 border-b-yellow-400`}
            onClick={() => setActiveTab("results")}
          >
            Match Results
          </button>
          <button
            className={`${
              activeTab === "all" ? "active" : ""
            } hover:text-yellow-400 border-b-2 border-b-yellow-400`}
            onClick={() => setActiveTab("all")}
          >
            All Matches
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {filteredData.map((match, index) => (
            <div
              key={index}
              className="bg-black-dark bg-black bg-opacity-50 text-white rounded-lg overflow-hidden hover:bg-black focus:bg-black-dark shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border-b-4 border-green-500 "
            >
              <div className="flex items-center justify-between p-4 border-r-4 rounded-lg border-t-2 rounded-r-2xl rounded-l-2xl border border-l-2 ">
                <h2 className="text-2xl font-bold text-yellow-400 ">
                  {match.tournamentName}
                </h2>
                <p className="">{match.matchStage}</p>
              </div>
              <div className="p-4 rounded-t-2xl border-l-2 border-r-yellow-400 border-r-2 text-lg border-l-yellow-400 ">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src={match.team1.teamLogo}
                      alt="Team 1 Logo"
                      className="w-14 h-14 rounded-full mr-2"
                    />
                    <p>{match.team1.name}</p>
                  </div>
                  <p className="animate-bounce">
                    {match.result === "upcoming"
                      ? "VS"
                      : `${match.result.score}`}
                  </p>
                  <div className="flex items-center">
                    <p>{match.team2.name}</p>
                    <img
                      src={match.team2.teamLogo}
                      alt="Team 2 Logo"
                      className="w-14 h-14 rounded-full ml-2"
                    />
                  </div>
                </div>
                <p className="text-gray-600 mb-2 mt-4   ">
                  {match.matchDescription}
                </p>
                <a
                  href={match.streamURL}
                  className="text-blue-500 hover:underline"
                >
                  {match.result === "upcoming"
                    ? "Watch Stream"
                    : "View Details"}
                </a>

                {match.result === "upcoming" && (
                  <p className="text-white">
                    Start: {match.matchDate} - {match.matchTime}
                  </p>
                )}

                <Link to={`/espMatchFixered/${match._id}`}>
                  <button
                    href=""
                    className="rounded-full bg-green-500 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-5 h-5 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchFixered;
