import { FaBookmark, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiCodeBracket } from "react-icons/hi2";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
const GameCard = ({ game }) => {
  const { user } = useAuth();
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
  } = game;

  const limitDescription = (description, limit) => {
    const words = description.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  const limitedDescription = limitDescription(description.description1, 20);
  const handleBookMark = () => {
    const requestBody = {
      _id: _id, // Send the _id from the singleTournament
    };

    fetch(`http://localhost:5000/gameBookMarks/${user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody), // Send the request body as JSON
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Game Bookmarked In Dashboard",
            icon: "success",
            confirmButtonColor: "#B2A4FF",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Already Added Bookmark",
            icon: "error",
            confirmButtonColor: "#86ff00",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#121a23",
        backgroundImage:
          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
      }}
      className="border-2 relative hover:border-white ease-in-out duration-500 rounded-md border-[#68fb9a] w-full text-white my-1"
    >
      <figure>
        <img
          className="md:h-64 h-80 w-full md:w-72 rounded-md"
          src={image}
          alt={title}
        />
      </figure>

      <div className="w-full flex justify-end">
        <p className=" max-w-fit bg-green-600 px-2 font-bold rounded-s-lg relative top-[-24px] flex items-center gap-1">
          <FaStar /> <span>{rating}</span>
        </p>
      </div>
      <div className="px-5 pb-5">
        <div className="mb-5">
          <h2 className="font-bold text-4xl md:text-[19px]">{title}</h2>
          <hr />
          <div className="flex mt-3 flex-wrap my-2 gap-1 cursor-default">
            <p className="md:text-[13px] bg-transparent border-green-500 border-2 px-3 rounded-lg hover:border-white ease-in-out text-center text-gray-300 font-semibold">
              Brand: {publisher}
            </p>
            <p className="md:text-[13px] bg-transparent border-green-500 border-2 px-3 rounded-lg hover:border-white ease-in-out gap-2 text-gray-300 font-semibold">
              Developed by {developer}
            </p>
            <p className="md:text-[13px] bg-transparent border-green-500 border-2 px-3 rounded-lg hover:border-white ease-in-out text-center text-gray-300 font-semibold">
              Type: {category}
            </p>
            <p className="md:text-[13px] bg-transparent border-green-500 border-2 px-3 rounded-lg hover:border-white ease-in-out text-center text-gray-300 font-semibold">
              Age: {ageRating}
            </p>
          </div>

          <p className="md:text-sm my-3 text-gray-300 line-clamp-3">
            {limitedDescription}
          </p>
        </div>

        <Link className="relative bottom-0 w-full" to={`/games/${_id}`}>
          <button
            className="border-2 md:text-[13px] w-full p-3 rounded font-bold hover:bg-green-700 border-green-500 transition duration-500 ease-in-out"
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
            }}
          >
            View Details
          </button>
        </Link>
        <button onClick={handleBookMark} className=" absolute top-72 right-5">
          <FaBookmark className="w-5 h-5 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default GameCard;
