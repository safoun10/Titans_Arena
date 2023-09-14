import axios from "axios";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { FaFacebook, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";

const UpcomingCountDown = () => {
	const [match, setMatch] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("Fixered.json")
			.then((response) => {
				// Assuming you want to display the first item (index 0)
				setMatch(response.data[0]);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="mb-56">
			{loading ? (
				<p>Loading...</p>
			) : match ? (
				<div className="bg-black rounded-full bg-opacity-10">
					<div className=" bg-[url('')] bg-cover   bg-opacity-10 rounded-full border-l-2  border-r-2 border-green-400 lg:p-20 sm:p-5">
						<div className="px-3 py-12">
							<div className="  border-2 border-yellow-500 bg-cover  lg:max-w-[1280px] rounded-full   mt-10 md:max-w-[696px] max-w-[343px] border-b-0 mx-auto bg-opacity-60  lg:px-10 lg:h-48  sm:h-full md:px-6 ">
								<div className="lg:flex md:flex block">
									{/* Team 1 Logo */}
									<div className="flex">
										<div>
											<img
												src={match.team1.team1Logo}
												alt="Team 1 Logo"
												className="lg:hidden md:hidden block"
											/>
										</div>
									</div>
									{/* Tournament Details */}
									<div className="w-56  mx-auto rounded-full">
										<img
											src={match.team1.team1Logo}
											alt="Team 1 Logo"
											className="lg:block md:hidden hidden"
										/>
										<img
											src={match.team1.team1Logo}
											alt="Tournament Image"
											className="lg:hidden md:block hidden"
										/>
									</div>
									<div className="lg:py-2 md:py-2 py-4 lg:px-5 md:px-4 px-3 flex flex-col items-center justify-center">
										<p className="lg:text-3xl md:text-2xl text-2xl font-semibold text-center uppercase text-yellow-400 ">
											{match.team1.name}{" "}
											<span className="text-white">
												{" "}
												VS
											</span>{" "}
											{match.team2.name}
											<br />
										</p>
										<div>
											{/* Countdown */}
											<Countdown
												date={
													new Date(
														`${match.matchDate}T${match.matchTime}:00`
													)
												}
												renderer={({
													days,
													hours,
													minutes,
													seconds,
													completed,
												}) => {
													if (completed) {
														return (
															<span>
																Match has
																started!
															</span>
														);
													} else {
														return (
															<div className="uppercase text-green-400 font-bold">
																<p className="text-xl text-center mt-2 ">
																	START
																</p>
																<p className="text-3xl  text-white font-semibold">
																	<span className="text-green-400 border border-t-0 border-b-0 rounded-full p-1">
																		{" "}
																		{days}d
																	</span>{" "}
																	{hours}h{" "}
																	{minutes}m{" "}
																	<span className="text-green-400 border border-t-0 border-b-0 rounded-full p-1 ">
																		{
																			seconds
																		}
																		s{" "}
																	</span>
																</p>
															</div>
														);
													}
												}}
											/>
										</div>
										<div className="mt-10 hidden bg-black p-4  rounded-full lg:flex">
											<ul className="flex gap-10 font-bold text-xl text-green-500">
												<p>Time: {match.matchTime} </p>{" "}
												Date:{" "}
												<span className="text-yellow-400">
													{match.matchDate}
												</span>
											</ul>
										</div>
									</div>
									{/* Team 2 Logo */}
									<div className="w-64 mx-auto">
										<img
											src={match.team2.team2Logo}
											alt="Team 2 Logo"
											className="lg:block md:hidden block"
										/>
										<img
											src={match.team2.team2Logo}
											alt="Team 2 Image"
											className="lg:hidden md:block hidden"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>No match data available.</p>
			)}
		</div>
	);
};

export default UpcomingCountDown;
