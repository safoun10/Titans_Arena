import React from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./GameInfo.css";
const GameInfo = ({ gameDetails }) => {
	const {
		_id,
		image,
		review,
		title,
		level,
		genre,
		description,
		rating,
		platforms,
		releaseDate,
		developer,
		publisher,
		ageRating,
		modes,
		tags,
		languageSupport,
		minimumRequirements,
		recommendedRequirements,
		features,
		systemSupport,
		category,
	} = gameDetails;
	if (
		!gameDetails ||
		!gameDetails.minimumRequirements ||
		!gameDetails.recommendedRequirements
	) {
		return <div>Loading or error message...</div>;
	}
	return (
		<div className=" just-gamers-bg h-[1050px] md:h-[700px]">
			<div className="mt-20">
				<Title secondaryText="SYSTEM REQUIREMENTS" />
			</div>
			<div className="lg:flex md:px-0 px-4 lg:justify-between md:max-w-6xl  mx-auto">
				<div className="lg:w-2/6 lg:ml-0 md:ml-5">
					<h2 className="text-4xl mb-2 font-bold">MINIMUM</h2>
					<div className="space-y-1 text-xl ">
						<p className="text-yellow-400 font-bold md:text-3xl ">
							OS:
						</p>
						<p className="md:text-xl text-base">{minimumRequirements.OS}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Processor:
						</p>
						<p className="md:text-xl text-base">{minimumRequirements.Processor}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Memory:
						</p>
						<p className="md:text-xl text-base">{minimumRequirements.Memory}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Graphics:
						</p>
						<p className="md:text-xl text-base">{minimumRequirements.Graphics}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Storage:
						</p>
						<p className="md:text-xl text-base">{minimumRequirements.Storage}</p>
					</div>
				</div>
				<div className="lg:w-2/6 md:block hidden ml-16   lg:flex justify-center">
					<img
						src="https://themepixer.com/demo/html/geco/Geco/img/images/just_gamers_img.png"
						alt=""
					/>
				</div>
				<div className="text-end lg:w-2/6">
					<h2 className="text-4xl mb-2 font-bold">RECOMMENDED</h2>
					<div className="space-y-1 text-xl">
						<p className="text-yellow-400 font-bold md:text-3xl">
							OS:{" "}
						</p>
						<p>{recommendedRequirements.OS}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Processor:{" "}
						</p>
						<p>{recommendedRequirements.Processor}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Memory:{" "}
						</p>
						<p>{recommendedRequirements.Memory}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Graphics:{" "}
						</p>
						<p>{recommendedRequirements.Graphics}</p>
						<p className="text-yellow-400 font-bold md:text-3xl">
							Storage:{" "}
						</p>
						<p>{recommendedRequirements.Storage}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameInfo;
