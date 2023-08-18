import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
import AllGames from "../AllGames/AllGames";
import GameCard from "../AllGames/GameCard";
const Category = () => {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("All Games");
  const [isTabListVisible, setIsTabListVisible] = useState(false);

  const url = `https://titans-arena-server.vercel.app/games?category=${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }, [category]);

  const toggleTabList = () => {
    setIsTabListVisible(!isTabListVisible);
  };
  console.log(category);

  return (
    <>
      <div>
        <Tabs>
          <div className="lg:hidden">
            <button
              onClick={toggleTabList}
              className="bg-green-500 text-white w-full flex justify-center mt-10 p-2 rounded"
            >
              Menu
            </button>
          </div>
          <div className={isTabListVisible ? "" : "hidden lg:block"}>
            <TabList className="lg:flex mx-10  flex-wrap justify-center mt-16 gap-5 md:gap-8">
              <Tab
                className={`border p-3  transition-all transform duration-700   rounded text-white ${
                  category === "All Games"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("All Games")}
              >
                All Games
              </Tab>
              <Tab
                className={`border p-3 my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
                  category === "CallOfDuty"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Action")}
              >
                Action
              </Tab>
              <Tab
                className={`border p-3  transition-all transform duration-700   rounded text-white ${
                  category === "Assassin's Creed"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Battle Royale")}
              >
                Battle Royale
              </Tab>
              <Tab
                className={`border p-3 my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
                  category === "RPG"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("RPG")}
              >
                RPG
              </Tab>
              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "Uncharted"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Adventure")}
              >
                Adventure
              </Tab>

              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "RedDeadRedemption"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Racing")}
              >
                Racing
              </Tab>

              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "Battlefield"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Simulation")}
              >
                Simulation
              </Tab>
              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "FarCry"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Sports")}
              >
                Sports
              </Tab>
              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "FarCry1"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Strategy")}
              >
                Strategy
              </Tab>
              <Tab
                className={`border p-3 text-white transition-all transform duration-700   rounded  ${
                  category === "FarCry2"
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-green-500 border-green-500"
                }`}
                onClick={() => setCategory("Puzzle")}
              >
                Puzzle
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.slice(0, 8).map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Category;
