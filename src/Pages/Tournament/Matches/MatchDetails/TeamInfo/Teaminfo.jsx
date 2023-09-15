import React from "react";
import Title from "../../../../../Components/Shared/AnimatedTitle/Titile";

const Teaminfo = ({ matchDetails }) => {
	const { tournamentName, matchStage, team1, team2 } = matchDetails ?? {};

	return (
		<div>
			<div
				className="just-gamers-bg h-[710px] "
				style={{
					backgroundImage: `url(${tournamentName})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				<div className="mt-20">
					<Title
						secondaryText={tournamentName}
						primaryText={matchStage}
					/>
				</div>
				<div className="flex justify-between max-w-5xl mx-auto">
					<div className="w-2/6">
						<h2 className="text-4xl mb-2 font-bold">
							{team1?.name}
						</h2>
						<div className="space-y-1 text-xl">
							<p className="text-yellow-400 font-bold text-3xl">
								Players:
							</p>
							<ul>
								{team1?.players?.map((player, index) => (
									<li key={index}>{player}</li>
								))}
							</ul>
							<p className="text-yellow-400 font-bold text-3xl">
								Country:
							</p>
							<p>{team1?.country}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Wins:
							</p>
							<p>{team1?.wins}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Trophies:
							</p>
							<p>{team1?.trophies}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Ranking:
							</p>
							<p>{team1?.ranking}</p>
						</div>
					</div>
					<div className="w-2/6 ml-12 hidden md:block justify-center">
						<img
							className=""
							src="https://i.ibb.co/GnHGHJX/pngwing-com-29.png"
							alt=""
						/>
					</div>
					<div className="text-end w-2/6">
						<h2 className="text-4xl mb-2 font-bold">
							{team2?.name}
						</h2>
						<div className="space-y-1 text-xl">
							<p className="text-yellow-400 font-bold text-3xl">
								Players:
							</p>
							<ul className="">
								{team2?.players?.map((player, index) => (
									<li className="" key={index}>
										{player}
									</li>
								))}
							</ul>
							<p className="text-yellow-400 font-bold text-3xl">
								Country:
							</p>
							<p>{team2?.country}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Wins:{" "}
							</p>
							<p>{team1.trophies}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Trophies:
							</p>
							<p>{team1?.trophies}</p>
							<p className="text-yellow-400 font-bold text-3xl">
								Ranking:
							</p>
							<p>{team1?.ranking}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teaminfo;
