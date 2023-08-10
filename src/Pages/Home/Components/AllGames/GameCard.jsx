import { FaStar } from "react-icons/fa";
const GameCard = ({ game }) => {
  const { image, review, title, level, genre, description, rating } = game;
  return (
    <div
      style={{
        backgroundColor: "#121a23",
        backgroundImage:
          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
      }}
      className="border-2 rounded-3xl text-white my-4 "
    >
      <figure className="">
        <img className="h-72 w-full rounded-t-3xl" src={image} alt="car!" />
      </figure>
      <div className="mx-5 my-4 ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm font-semibold">{level} Level 2</p>
        <div className="flex font-semibold text-sm gap-2 text-gray-300">
          <p>Horror</p> |<p> Adventure</p> |<p> Pc</p> |<p>Mobile</p>
          {genre}
        </div>
        <p className="text-sm my-2 text-gray-300">{description}</p>
        <p className="text-warning flex items-center gap-1">
          <FaStar /> <span>{rating}</span>
          <span className="text-gray-400 text-xs">({review})</span>
        </p>
        <p className="text-green-400  font-semibold ">Learn More</p>
      </div>
    </div>
  );
};

export default GameCard;
