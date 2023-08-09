import { useEffect } from "react";
import { useState } from "react";
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
    <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto">
      {games.map((game, i) => (
        <GameCard key={i} game={game} />
      ))}
    </div>
  );
};

export default AllGames;
