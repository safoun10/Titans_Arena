import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const GameCard = ({ game }) => {
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
    category
  } = game;
  
  return (
    <div
      style={{
        backgroundColor: "#121a23",
        backgroundImage:
          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
      }}
      className="border rounded-md border-[#68fb9a]  text-white my-4 "
    >
      <figure className="">
        <img
          className="md:h-64 h-80 w-full md:w-72 border rounded-md"
          src={image}
          alt={title}
        />
      </figure>
      <div className="mx-5 my-3 ">
        <h2 className="font-bold text-xl text-center md:text-[17px]">
          {title}
        </h2>
        <p className="md:text-[14px] text-center text-gray-300 font-semibold">
          {publisher}
        </p>
        <p className="md:text-[14px] text-center text-gray-300 font-semibold">
          Developer :{developer}
        </p>
        <div className="md:text-[14px] text-center text-gray-300 font-semibold">
          Type :{category}
        </div>
        <div className="md:text-[14px] text-center text-gray-300 font-semibold">
          Age Rating :{ageRating}
        </div>

        <p className="md:text-sm my-1 text-gray-400 text-center">
          {description}
        </p>

        <p className="text-warning justify-center mb-1 flex items-center gap-1">
          <FaStar /> <span>{rating}</span>
          <span className="text-gray-400  text-xs">{review}</span>
        </p>
        {/* <p className="text-green-400  font-semibold text-center border-2 border-green-500 ">Learn More</p> */}
        <button className="border-2 md:text-[13px] rounded-tl-box rounded-br-box p-2 w-full font-bold hover:bg-green-500  border-green-500">
        <Link to={`/games/${_id}`}>View Details</Link>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
