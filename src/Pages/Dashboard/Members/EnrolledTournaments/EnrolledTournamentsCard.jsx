import axios from "axios";
import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";
import "./enrolledTournamentsCard.css";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const EnrolledTournamentsCard = ({ tournamentId }) => {
  const { user } = useAuth();
  const [enrolledCard, setEnrolledCard] = useState({
    // Initialize with your specific values
    start_date: "2023-10-04",
    matchTime: "19:33",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tournaments/${tournamentId}`)
      .then((response) => {
        setEnrolledCard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [tournamentId]);

  const {
    _id,
    tournamentPicture,
    prize_pool,
    organizer_name,
    location,
    matchTime,
    start_date,
    matchStage,
    tournament_name,
    game_title,
    game_developer,
    game_platform,
    game_genre,
    totalTeam,
    gamingMode,
    description,
  } = enrolledCard;

  const handleDeleteEnrolledTournament = () => {
    axios
      .patch(`http://localhost:5000/removeEnrolledTournament/${user?.email}`, {
        tournamentIdToRemove: _id,
      })
      .then((response) => {
        console.log(response.data.message);
        // Handle success or display a success message
      })
      .catch((error) => {
        console.error("Error removing enrolled tournament:", error);
        // Handle error or display an error message
      });
  };

  return (
    <div>
      <div className=" rounded-md shadow-lg bg-slate-800">
        <div className="md:flex px-4 w-[65rem] leading-none max-w-5xl">
          <div className="flex-none">
            <img
              src={tournamentPicture}
              alt="pic"
              className="h-72 w-96 rounded-md shadow-2xl transform -translate-y-6 hover:translate-y-0 border-4 border-gray-300 transition duration-500"
            />
          </div>

          <div className="flex-col text-gray-300">
            <Link to={`/singleTournamentDetail/${_id}`}>
              <p className="pt-4 text-center text-3xl font-bold">
                {tournament_name}
              </p>
            </Link>

            <div className="flex  my-2">
              <span className="font-bold  text-xl flex justify-center items-center   w-1/5">
                {start_date}
              </span>
              <div className="text-center  flex justify-center items-center  w-3/5">
                <Countdown
                  date={new Date(`${start_date}T${matchTime}:00`)}
                  renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) {
                      return <span>Match has started!</span>;
                    } else {
                      return (
                        <div className="uppercase text-green-400 font-bold">
                          <p className="text-3xl  text-white font-semibold">
                            <span className="text-green-400 border border-t-0 border-b-0 rounded-full p-1">
                              {" "}
                              {days}d
                            </span>{" "}
                            {hours}h {minutes}m{" "}
                            <span className="text-green-400 border border-t-0 border-b-0 rounded-full p-1 ">
                              {seconds}s{" "}
                            </span>
                          </p>
                        </div>
                      );
                    }
                  }}
                />
              </div>
              <span className="font-bold text-xl  flex justify-center items-center w-1/5">
                {matchStage}
              </span>
            </div>
            <hr className="hr-text" data-content="" />
            <p className="hidden md:block px-4 my-4 w-[39rem] text-left">
              {description}
            </p>

            <p className="flex px-4 my-2">
              Rating: 9.0/10
              <span className="font-bold px-2">|</span>
              Mood: Dark
            </p>

            <div className="text-sm flex gap-4 ml-4">
              <Link to={`/singleTournamentDetail/${_id}`}>
                <button className="custom-button py-4 px-4 ">
                  See More Details
                </button>
              </Link>
              <button
                onClick={handleDeleteEnrolledTournament}
                className="custom-button py-4 px-4  !bg-red-500"
              >
                Remove Enrollment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledTournamentsCard;
