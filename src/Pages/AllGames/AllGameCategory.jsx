import React, { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Home/Components/Category/Category.css";
import "react-tabs/style/react-tabs.css";

import GameCard from "../Home/Components/AllGames/GameCard";
import { FaSearch } from "react-icons/fa";
const AllGameCategory = () => {
  const [games, setGames] = useState([]);
  console.log(games);

  const [category, setCategory] = useState("All Games");
  const [isTabListVisible, setIsTabListVisible] = useState(false);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const url = `http://localhost:5000/Games?category=${category}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setGames(data);
      });
  }, [category]);

  useEffect(() => {
    fetch(`http://localhost:5000/searchGames?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        console.log(data);
      });
  }, [search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  const toggleTabList = () => {
    setIsTabListVisible(!isTabListVisible);
  };
  // console.log(searchGames);

  return (
    <>
      <div className="py-5 px-10 flex justify-center items-center">
        <input
          type="text"
          className="py-2 rounded px-10 lg:w-[50%] w-full font-bold border-green-500 relative"
          name="search"
          id="search"
          ref={searchRef}
          placeholder="Search Games"
        />
        <div className="absolute lg:left-[345px] left-12">
          <FaSearch></FaSearch>
        </div>
        <input
          type="submit"
          onClick={() => handleSearch()}
          className="border lg:px-10 px-3 py-[7px] bg-image font-bold  border-green-500  rounded absolute lg:right-[335px] bg-green-500 text-white right-10 lg:w-[200px] w-[35%]"
          name=""
          value="Search Games"
          id=""
        />
      </div>

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
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
              {games.map((game, i) => (
                <GameCard key={i} game={game}></GameCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default AllGameCategory;