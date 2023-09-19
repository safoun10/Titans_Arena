import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const UpcommingTournamentsModal = ({ singleTournament, closeModal, user }) => {
 
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
    gamingMoode,
  } = singleTournament;

  const handleEnrollTournament = () => {
    const requestBody = {
      _id: _id, // Send the _id from the singleTournament
    };

    fetch(`http://localhost:3000/enrollTournaments/${user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody), // Send the request body as JSON
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Profile Updated Successfully!",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Allrady enrolled in the tournament",
            icon: "error",
            confirmButtonColor: "#86ff00",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="z-50 flex justify-center items-center ">
      <div className="border py-4 bg-red-950 bg-opacity-70 w-[55rem]   text-white">
        <img className="w-2/4 mx-auto  h-2/4" src={tournamentPicture} alt="" />
        <div>
          <h3 className="text-3xl text-orange-500 font-bold">
            tournament Name : {tournament_name}
          </h3>
          <div className="flex gap-2 text-green-400 justify-center">
            <h3 className=" text-xl font-bold">Date : {start_date}</h3>
            <h3 className="text-xl font-bold">Start Time:{matchTime}</h3>
          </div>
          <h3 className="text-xl font-bold text-green-400">
            location : {location}
          </h3>
          <div className="flex">
            <div className="w-1/2 text-lg  ">
              <h3 className="text-start ml-20  text-lg font-bold">
                Game Name : {game_title}
              </h3>
              <h3 className="text-start ml-20  text-lg font-bold">
                Developer : {game_developer}
              </h3>
              <h3 className="text-start ml-20  text-lg font-bold">
                Plateform : {game_platform}
              </h3>
              <h3 className="text-start ml-20  text-lg font-bold">
                Genre : {game_genre}
              </h3>
              <h3 className="text-start ml-20  text-lg font-bold">
                Total Team : {totalTeam}
              </h3>
              <h3 className="text-start ml-20  text-lg font-bold">
                Gaming Mode : {gamingMoode}
              </h3>
            </div>
            <div className="w-1/2 text-lg ">
              <h3 className="text-end mr-20  text-lg font-bold">
                {prize_pool} : prize
              </h3>
              <h3 className="text-end mr-20  text-lg font-bold">
                {organizer_name} : organizer
              </h3>
              <h3 className="text-end mr-20  text-lg font-bold">
                {location} : location
              </h3>
              <h3 className="text-end mr-20  text-lg font-bold">
                {matchTime} : match
              </h3>
              <h3 className="text-end mr-20  text-lg font-bold">
                {matchStage} : match
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={handleEnrollTournament}
              className="custom-button my-2 hover:translate-x-4  py-3 px-10"
            >
              Enroll Now This Tournament
            </button>
          </div>
          <div>
            <button
              onClick={closeModal}
              className="custom-button !bg-red-600  hover:translate-x-4  py-3 px-10"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingTournamentsModal;
