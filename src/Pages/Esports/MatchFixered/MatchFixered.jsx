import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";
import { FaTwitch, FaYoutube } from "react-icons/fa";

function MatchFixered() {
	const [data, setData] = useState([]);
	const [activeTab, setActiveTab] = useState("all");

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

  const filteredData =
    activeTab === "upcoming"
      ? data.filter((item) => item.matches === "upcoming")
      : activeTab === "results"
      ? data.filter((item) => item.matches === "finished")
      : data;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-48">
        <div className="animate-bounce">
          {/* <img
            className="w-24 mx-auto mt- transform hover:translate-y-2 hover:shadow-xl transition duration-300"
            src="https://i.ibb.co/QQs83pz/pngwing-com-12.png"
            alt=""
          /> */}
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
        <div className="tabs flex items-center justify-center mb-4 bg-black w-1/2 mx-auto p-2  gap-9 rounded-md border border-green-500 font-extrabold text-center text-1xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-2">
          {filteredData.map((match, index) => (
            <div className="bg-[url('')]">
              <div
                style={{
                  backgroundColor: "#121a23",
                  backgroundImage:
                    "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
                }}
                className=" max-w-7xl border-l-2 border-r-2  border-r-yellow-400 border-dotted   hover:border-t-2 border-yellow-400  border-l-yellow-500 h-32 items-center mt-5  mx-auto bg-black bg-opacity-60 lg:px-0 md:px-6 px- py-8 rounded-full uppercase "
              >
                <div className="flex   ">
                  <div className="items-center mx-auto  gap-2 flex">
                    <div className="w-16 hidden md:block h-16 mx-auto">
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
                      <h1 className="text-xl  font-bold text-yellow-400">
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
                    <p className=" text-xl font-semibold text-center text-white"></p>
                    <p className=" animate-bounce text-yellow-400  text-1xl font-semibold text-center ">
                      {match.result.score}
                    </p>
                    <p className=" md:text-xl sm:text-lg text-xl font-semibold text-center text-white"></p>
                    <p className="text-xs uppercase  text-center text-white">
                      Winner:{" "}
                      {match.result.winner === "upcoming"
                        ? "Upcoming"
                        : match.result.winner}
                    </p>
                    <div>
                      <p> {match.matchTime}</p>
                    </div>
                  </div>

                  <div className="items-center text-center mx-auto  gap-2 flex">
                    <div>
                      <h1 className="text-xl  font-bold text-yellow-400">
                        {" "}
                        {match.team2.name}
                      </h1>
                      <p className="flex gap-2 text-green-400">
                        Watch <FaTwitch className="mt-1" />{" "}
                        <FaYoutube className="mt-1" />{" "}
                      </p>
                    </div>

                    <div className="w-16 hidden md:block h-16 mx-auto">
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchFixered;
