import React from "react";
import { FaGamepad, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
// import { FaPeopleGroup, FaTv, FaGamepad } from "react-icons/fa";

const TournamentsVideo = () => {
  const esportsCards = [
    {
      title: "Video 1",
      youtubeVideoUrl:
        "https://www.youtube.com/embed/XB7Lzt_stNY?si=_wKjOoAgXtKdZpzt",
      text: "Lorem ipsum dolor, ",
      gamingMoode: "Moode 2",
      teamPlayer: "Team 2",
      tournamentName: "Tournament 1",
      gameMode: "Mobile",
      matchDate: "2023-09-15",
      matchTime: "14:00",
      matchLocation: "City 1",
    },
    {
      title: "Video 2",
      youtubeVideoUrl:
        "https://www.youtube.com/embed/UXO2Xd6oroE?si=kF9MexPcUt96c4Bq",
      text: "Lorem ipsum dolor, ",
      gamingMoode: "Moode 2",
      teamPlayer: "Team 2",
      tournamentName: "Tournament 2",
      gameMode: "PC",
      matchDate: "2023-09-16",
      matchTime: "15:30",
      matchLocation: "City 2",
    },
    {
      title: "Video 3",
      youtubeVideoUrl:
        "https://www.youtube.com/embed/A0zpF1c3aVA?si=LP6QiI3LTJ4eyJf7",
      text: "Lorem ipsum dolor ",
      gamingMoode: "Moode 4",
      teamPlayer: "Team 4",
      tournamentName: "Tournament 3",
      gameMode: "Mobile",
      matchDate: "2023-09-17",
      matchTime: "13:45",
      matchLocation: "City 3",
    },
    {
      title: "Video 4",
      youtubeVideoUrl:
        "https://www.youtube.com/embed/nM3-6LFdd7M?si=1veEdv4CUxmGYq3m",
      text: "Lorem ipsum dolor,",
      gamingMoode: "Moode 3",
      teamPlayer: "Team 3",
      tournamentName: "Tournament 4",
      gameMode: "PC",
      matchDate: "2023-09-18",
      matchTime: "16:15",
      matchLocation: "City 4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  mb-32 mt-28 ">
      <div className="border-l-2 w-72  font-extrabold sm:text-1xl text-3xl mb-10 text-yellow-500 border-t-2 rounded-md border-green-400 p-2 uppercase">
        <h3> Match Videos</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
        {esportsCards.map((match, index) => (
          <div key={index} card={match}>
            <div
              style={{
                backgroundColor: "#121a23",
                backgroundImage:
                  "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
              }}
              className="bg-black border-2  border-black p-1 shadow-md mb-14 h-[440px] w-72 rounded-md"
            >
              {/* YouTube video iframe */}
              <iframe
                className="h-60  border-2 border-black border-b-yellow-400 w-64 rounded-md shadow-2xl mt-6 transform -translate-y-10 mx-auto hover:-translate-y-4 transition duration-700"
                src={match.youtubeVideoUrl}
                title={`Video ${index + 1}`}
                // width="300"
                // height="200"
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <div className="p-3  mt-6">
                <p>
                  date: {match.matchDate} time: {match.matchTime}-
                  <span className="text-green-500"> {match.matchLocation}</span>
                </p>

                <p className="block mb-1 mt-4 text-2xl font-extrabold text-yellow-400">
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
                <img src="" alt="" className="rounded-full h-7" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentsVideo;
