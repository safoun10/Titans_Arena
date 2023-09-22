import React, { useState } from "react";
import { FaGamepad, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import UpcommingTournamentsModal from "./UpcommingTournamentsModal";
const UpcommingTournamentsCard = ({ singleTournament, user }) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSelectTournament = (id) => {
    console.log(id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validate = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        color: "#FFFFFF",
        background:
          " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",

        title: "Oops...",
        text: "Something went wrong!",
      });
      navigate("/login");
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#121a23",
          backgroundImage:
            "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
        }}
        className="bg-black border-2 text-center border-black shadow-md mb-14 w-[315px] h-[400px] relative   rounded-md"
      >
        <Link to={`/singleTournamentDetail/${_id}`}>
          <div className="flex justify-center items-center leading-none">
            <img
              src={tournamentPicture}
              alt="pic"
              className="h-48 w-10/12 border-2 border-black rounded-md shadow-2xl  transform -translate-y-10 hover:-translate-y-4 transition duration-700"
            />
          </div>

          <div className="px-3">
            <div className="my-2">
              <p className="block  text-2xl font-extrabold text-yellow-400">
                {tournament_name}
              </p>
            </div>
            <div className=" mb-2 mt-2 flex ">
              <div className="w-1/2">
                <p className="  font-bold">
                  Organizer : <br />
                  {organizer_name}
                </p>
              </div>
              <div>
                <p className=" font-semibold">date {start_date}</p>
                <p className=" font-semibold">
                  time {matchTime}-{location}
                </p>
              </div>
            </div>

            <div className="flex max-w-xs mx-auto  px-2 justify-between ">
              <div className="flex text-xl font-semibold gap-1 text-white">
                <FaPeopleGroup className="mt-1" />

                <p>
                  <span> {totalTeam}</span>
                </p>
              </div>
              <div className="flex text-xl font-semibold gap-1 text-white">
                <FaTv className="mt-1" />

                <p>
                  <span> {matchStage}</span>
                </p>
              </div>
              <div className="flex text-xl font-semibold gap-1 text-white">
                <FaGamepad className="mt-1" />
                <p>
                  <span> {gamingMoode}</span>
                </p>
              </div>
              <div className="flex text-xl font-semibold gap-1 text-white">
                <FaGamepad className="mt-1" />
                <p>
                  <span> 0</span>
                </p>
              </div>
            </div>
            {/* <div className="absolute  -bottom-5">
              <button className="custom-button hover:translate-x-4  py-3 px-5">
              Enroll Now Thi Tournament
              </button>
            </div> */}
          </div>
        </Link>
        <div className="text-center">
          <button
            onClick={openModal}
            className="custom-button my-5 hover:translate-x-4  py-3 px-10"
          >
            Enroll Now This Tournament
          </button>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 border">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <UpcommingTournamentsModal
              user={user}
              closeModal={closeModal}
              singleTournament={singleTournament}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcommingTournamentsCard;
