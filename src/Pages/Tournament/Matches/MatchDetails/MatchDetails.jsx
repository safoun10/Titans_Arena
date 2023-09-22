import React from "react";
import { useParams } from "react-router-dom";
import MatchHeader from "./MatchHeader/MatchHeader";
import AboutMatch from "./AboutMatch/AboutMatch";
import Teaminfo from "./TeamInfo/Teaminfo";
import { useGetMatchDetailsQuery } from "../../../../Redux/slice/MatchDetailsState";

const MatchDetails = () => {
	const { id } = useParams();

	const {
		data: matchDetails,
		isError,
		isLoading,
	} = useGetMatchDetailsQuery(id);

	if (isError) {
		return <div>Error .........</div>;
	}

	if (isLoading) {
		return <div>Loading .........</div>;
	}

	return (
		<div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
			<MatchHeader matchDetails={matchDetails}></MatchHeader>
			<div>
				<AboutMatch matchDetails={matchDetails} />
				<Teaminfo matchDetails={matchDetails}></Teaminfo>
			</div>
		</div>
	);
};

export default MatchDetails;
