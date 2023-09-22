import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Category.css";
import "react-tabs/style/react-tabs.css";
import GameCard from "../AllGames/GameCard";
import { useGetCategoryStateQuery } from "../../../../Redux/slice/CategoryState";
const Category = () => {
	const [games, setGames] = useState([]);
	const [category, setCategory] = useState("All Games");
	const [isTabListVisible, setIsTabListVisible] = useState(false);

	const { data } = useGetCategoryStateQuery(category);

	useEffect(() => {
		setGames(data);
	}, [category , data]);

	const toggleTabList = () => {
		setIsTabListVisible(!isTabListVisible);
	};

	return (
		<>
			<div>
				<Tabs>
					<div className="lg:hidden flex justify-center">
						<button
							onClick={toggleTabList}
							className="bg-green-500 text-white w-[50%]  mt-10 p-2 rounded"
						>
							Menu
						</button>
					</div>
					<div className={isTabListVisible ? "" : "hidden lg:block"}>
						<TabList className="lg:flex mx-10 mb-10 flex-wrap justify-center text-center  mt-16 gap-5 md:gap-8">
							<Tab
style={{
							clipPath:
								"polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
						}}								className={`border p-3 hover:cursor-pointer custom-tabs transition-all transform duration-700   rounded text-white ${
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
						}}								className={`border hover:cursor-pointer p-3 my-5 custom-tabs lg:my-0 transition-all transform duration-700   rounded text-white ${
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
						}}								className={`border hover:cursor-pointer p-3 custom-tabs  transition-all transform duration-700   rounded text-white ${
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
						}}								className={`border hover:cursor-pointer p-3 my-5 custom-tabs lg:my-0 transition-all transform duration-700   rounded text-white ${
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
						}}								className={`border hover:cursor-pointer p-3 custom-tabs text-white transition-all transform duration-700   rounded  ${
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
						}}								className={`border hover:cursor-pointer p-3 my-5 lg:my-0 custom-tabs text-white transition-all transform duration-700   rounded  ${
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
						}}								className={`border hover:cursor-pointer p-3 custom-tabs text-white transition-all transform duration-700   rounded  ${
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
						}}								className={`border hover:cursor-pointer p-3 my-5 lg:my-0 custom-tabs text-white transition-all transform duration-700   rounded  ${
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
						}}								className={`border hover:cursor-pointer p-3  custom-tabs text-white transition-all transform duration-700   rounded  ${
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
						}}								className={`border hover:cursor-pointer p-3 my-5 lg:my-0  custom-tabs text-white transition-all transform duration-700   rounded  ${
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
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
								<GameCard key={i} game={game}></GameCard>
							))}
						</div>
					</TabPanel>
					<TabPanel>
						<div className="grid md:grid-cols-4  gap-4 max-w-6xl mx-6 md:mx-auto">
							{games?.slice(0, 8).map((game, i) => (
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
