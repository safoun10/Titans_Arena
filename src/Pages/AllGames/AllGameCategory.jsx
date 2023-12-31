import React, { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../Home/Components/Category/Category.css";
import "react-tabs/style/react-tabs.css";

import GameCard from "../Home/Components/AllGames/GameCard";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination";
import {
	useGetGameCategoryQuery,
	useGetGameSearchQuery,
} from "../../Redux/slice/AllGameCategory";
import { data } from "autoprefixer";

const AllGameCategory = () => {
	const [games, setGames] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const gamesPerPage = 8;

	const [category, setCategory] = useState("All Games");
	const [isTabListVisible, setIsTabListVisible] = useState(false);
	const searchRef = useRef("");
	const [search, setSearch] = useState("");

	const { data: gamesCategory, isLoading } =
		useGetGameCategoryQuery(category);

	const { data: gamesSearch } = useGetGameSearchQuery(search);

	useEffect(() => {
		setGames(gamesCategory);
	}, [gamesCategory, data]);

	useEffect(() => {
		setGames(gamesSearch);
		if(searchRef.current){
			searchRef.current.value = ""; 
		}
		console.log(searchRef.current);
	}, [gamesSearch, data]);

	const handleSearch = () => {
		setSearch(searchRef.current.value);
	};

	const toggleTabList = () => {
		setIsTabListVisible(!isTabListVisible);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			setSearch();
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="py-5 px-10 flex justify-center items-center">
				<input
					type="text"
					className="py-2 rounded px-10 lg:w-[50%] w-full font-bold border-green-500 relative"
					name="search"
					id="search"
					ref={searchRef}
					onKeyDown={handleKeyPress}
					placeholder="Search Games"
				/>
				<div className="absolute lg:left-[300px] left-12">
					<FaSearch></FaSearch>
				</div>
				<input
					type="submit"
					onClick={() => handleSearch()}
					className="border cursor-pointer lg:px-10 px-3 py-[7px] bg-image font-bold  border-green-500  rounded absolute lg:right-[335px] bg-green-500 text-white right-10 lg:w-[200px] w-[35%]"
					value="Search Games"

				/>
			</div>

			<div className="pb-10">
				<Tabs>
					<div className="lg:hidden flex justify-center">
						<button
							onClick={toggleTabList}
							className="bg-green-500 text-white w-[50%] mt-10 p-2 rounded"
						>
							Menu
						</button>
					</div>
					<div className={isTabListVisible ? "" : "hidden lg:block"}>
						<TabList className="lg:flex mx-10 mb-10 flex-wrap justify-center mt-16 gap-5 md:gap-8 text-center">
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer transition-all transform duration-700   rounded text-white ${
									category === "All Games"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("All Games")}
							>
								All Games
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer  my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
									category === "CallOfDuty"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Action")}
							>
								Action
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer transition-all transform duration-700   rounded text-white ${
									category === "Assassin's Creed"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Battle Royale")}
							>
								Battle Royale
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer my-5 lg:my-0 transition-all transform duration-700   rounded text-white ${
									category === "RPG"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("RPG")}
							>
								RPG
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
									category === "Uncharted"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Adventure")}
							>
								Adventure
							</Tab>

							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
									category === "RedDeadRedemption"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Racing")}
							>
								Racing
							</Tab>

							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
									category === "Battlefield"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Simulation")}
							>
								Simulation
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
									category === "FarCry"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Sports")}
							>
								Sports
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
									category === "FarCry1"
										? "hover:bg-green-500 border-green-500"
										: "hover:bg-green-500 border-green-500"
								}`}
								onClick={() => setCategory("Strategy")}
							>
								Strategy
							</Tab>
							<Tab
								style={{
									clipPath:
										"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
								}}
								className={`border p-3 custom-tabs cursor-pointer text-white transition-all transform duration-700   rounded  ${
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
						<div className="grid md:grid-cols-4 gap-2 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>

					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games
								?.slice(
									(currentPage - 1) * gamesPerPage,
									currentPage * gamesPerPage
								)
								?.map((game, i) => (
									<GameCard key={i} game={game}></GameCard>
								))}
						</div>
						<Pagination
							totalGames={games?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					</TabPanel>
				</Tabs>
			</div>
		</>
	);
};

export default AllGameCategory;
