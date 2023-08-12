import { useEffect } from "react";
import { useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import GameCard from "./GameCard";

const AllGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("gamecard.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);
  console.log(games);
  return (
    <div>
        <div className="text-center my-5">
        {/* <h3 className="text-[#68fb9a] font-semibold ">GET UPDATE OF</h3>
        <h1 className="text-white text-4xl font-bold my-2">ALL GAMES</h1> */}
        <h1 className="text-[#68fb9a]  text-3xl font-bold">ALL GAMES</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 mx-auto"
          fill="#68fb9a"
          viewBox="0 0 65 5"
          fillRule="evenodd"
        >
          <path
            d="M968,5630h65l-4,5H972Z"
            transform="translate(-968 -5630)"
          ></path>
        </svg>
      </div>
      <div className="grid md:grid-cols-3  gap-4 max-w-6xl mx-6 md:mx-auto">
        {games.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;
