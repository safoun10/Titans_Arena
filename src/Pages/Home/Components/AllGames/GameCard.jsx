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
      className="border rounded-md border-[#68fb9a]  text-white my-4 "
    >
      <figure className="">
        <img className="md:h-64 h-80 w-full md:w-72 border rounded-md" src={image} alt="car!" />
      </figure>
      <div className="mx-5 my-3 ">
        <h2 className="font-bold text-xl text-center md:text-[17px]">{title}</h2>
        <p className="md:text-[14px] text-center text-gray-300 font-semibold">{level} Level 2</p>
        <div className="flex justify-center md:text-xs gap-2 text-gray-300">
          <p>Horror</p> |<p> Adventure</p> |<p> Pc</p> 
          {genre}
        </div>
        <p className="md:text-sm my-1 text-gray-400 text-center">{description}</p>
        <p className="text-warning justify-center mb-1 flex items-center gap-1">
          <FaStar /> <span>{rating}</span>
          <span className="text-gray-400  text-xs">({review})</span>
        </p>
        {/* <p className="text-green-400  font-semibold text-center border-2 border-green-500 ">Learn More</p> */}
        <button className="border-2 md:text-[13px] rounded-tl-box rounded-br-box p-2 w-full font-bold hover:bg-green-500  border-green-500">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default GameCard;
