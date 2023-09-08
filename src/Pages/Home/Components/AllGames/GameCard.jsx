import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiCodeBracket } from "react-icons/hi2";
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
    category,
  } = game;

  const limitDescription = (description, limit) => {
    const words = description.split(" ");
    const limitedWords = words.slice(0, limit);
    return limitedWords.join(" ");
  };

  const limitedDescription = limitDescription(description.description1, 20);

  return (
    <div
      style={{
        backgroundColor: "#121a23",
        backgroundImage:
          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
      }}
      className="border rounded-md border-[#68fb9a] w-full text-white my-4 "
    >
      <figure className="">
        <img
          className="md:h-64 h-80 w-full md:w-72 border rounded-md"
          src={image}
          alt={title}
        />
      </figure>
      <div className="mx-5 my-5  h-full">
        <h2 className="font-bold text-3xl text-center md:text-[19px]">
          {title}
        </h2>
       <div className="flex flex-col justify-center items-center gap-3">
       <p className="md:text-[13px] text-center text-gray-300 font-semibold">
        Brand : {publisher}
        </p>
        <p className="md:text-[13px] flex justify-center items-center gap-2 text-gray-300 font-semibold">
         <HiCodeBracket/> : {developer}
        </p>
        <p className="md:text-[13px] text-center text-gray-300 font-semibold">
        Type : {category}
        </p>
        <p className="md:text-[13px] text-center text-gray-300 font-semibold">
         Age : {ageRating}
        </p>
       </div>

        <p className="md:text-sm my-1 text-gray-400 text-center">
          {limitedDescription}
        </p>

        <p className="text-warning justify-center mb-1 flex items-center gap-1">
          <FaStar /> <span>{rating}</span>
          <span className="text-gray-400  text-xs">{review}</span>
        </p>
        {/* <p className="text-green-400  font-semibold text-center border-2 border-green-500 ">Learn More</p> */}
        <Link to={`/games/${_id}`}>
          <button
            className="border-2 md:text-[13px]  p-3  w-full rounded  font-bold hover:bg-green-700  border-green-500 transition duration-500 transform  ease-in-out "
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
                
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
