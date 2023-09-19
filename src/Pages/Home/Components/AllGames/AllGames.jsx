// import { useEffect } from "react";
// import { useState } from "react";
// import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
// import GameCard from "./GameCard";

// const AllGames = () => {
//   const [games, setGames] = useState([]);
//   useEffect(() => {
//     fetch("gamecard.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data));
//   }, []);
//   console.log(games);
//   return (
//     <div>
//       <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
//         {games.map((game, i) => (
//           <GameCard key={i} game={game} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllGames;
