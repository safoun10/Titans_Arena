import React from "react";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";
import TournamentForm from "./TournamentForm";

const AddTournament = () => {
  return (
		<div className="pt-16 bg-[#1d232a]">
			<Title
				primaryText="Submit Your"
				secondaryText=" Tournament Details"
			/>

			<section className="pb-20  ">
				<TournamentForm />
			</section>
		</div>
  );
};

export default AddTournament;
