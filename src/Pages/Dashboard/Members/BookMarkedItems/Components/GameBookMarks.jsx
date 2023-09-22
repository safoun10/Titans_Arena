import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../../../Hooks/useAuth";

const GameBookMarks = ({ gameId }) => {
  const { user } = useAuth();
  const [bookMarkedGame, setBookMarkedGame] = useState({});

  useEffect(() => {
    axios
      .get(`https://titans-arena-server.vercel.app/games/${gameId}`)
      .then((response) => {
        setBookMarkedGame(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [gameId]);

  const {
    _id,
    image,
    review,
    title,
    level,
    genre,
    description,
    rating,
    platforms,
    releaseDate,
    developer,
    publisher,
    ageRating,
    modes,
    tags,
    languageSupport,
    minimumRequirements,
    recommendedRequirements,
    features,
    systemSupport,
    category,
  } = bookMarkedGame;

  const limitDescription = (description, limit) => {
    const words = description.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  const limitedDescription = limitDescription(
    bookMarkedGame?.description?.description1 || "",
    15
  );

  const handleRemoveGameBookmark = () => {
    axios
      .patch(
        `https://titans-arena-server.vercel.app/removeGameBookmark/${user?.email}`,
        {
          _id: gameId, // Replace gameId with the actual game ID
        }
      )
      .then((response) => {
        console.log("Game bookmark removed:", response.data.message);
        console.log(response);
        if (response.data.result.modifiedCount) {
          Swal.fire({
            title: "Bookmark Removed",
            icon: "success",
            color: "#FFFFFF",
            background:
            " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)",

            confirmButtonColor: "cool",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Not Removed",
            icon: "error",
            background:
            " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.66078) 100%)",
            confirmButtonColor: "cool",
            confirmButtonText: "OK",
          });
        }
        // Set a state flag to indicate success if needed
      })

      .catch((error) => {
        console.error("Error removing game bookmark:", error);
        // Handle the error, if needed
      });
  };
  return (
    <div
      style={{ backgroundColor: "#282828" }}
      className="bg-gray-200 rounded-lg p-3"
    >
      <div
        style={{
          position: "relative",
          paddingTop: "100%",
          marginBottom: "1rem",
        }}
      >
        <img className="block w-full absolute inset-0" src={image} alt="" />
      </div>

      <Link to={`/games/${gameId}`}>
        <div className="font-bold text-white text-line-clamp-1  block">
          <h3 className="hover:text-green-500 text-lg text-center">{title}</h3>
        </div>
        <div className="relative pb-3">
          <span
            style={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
            className="text-xs  text-gray-400 text-line-clamp-1"
          >
            <h3 className="text-center ">{limitedDescription}</h3>
          </span>
        </div>
      </Link>

      <button
        onClick={handleRemoveGameBookmark}
        className="custom-button py-2  px-4 w-full  !text-sm !bg-red-500"
      >
        Remove Enrollment
      </button>
    </div>
  );
};

export default GameBookMarks;
