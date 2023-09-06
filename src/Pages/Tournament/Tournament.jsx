import React from "react";
import TournamentBanner from "./TournamentBanner/TournamentBanner";
import PopularTournaments from "./TournamentBanner/PopularTournaments/PopularTournaments";
import UpcomingTournaments from "./TournamentBanner/UpcomingTournaments/UpcomingTournaments";
import Matches from "./Matches/Matches";

const Tournament = () => {
  return (
    <div className=" bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <TournamentBanner></TournamentBanner>
      <>
        <PopularTournaments></PopularTournaments>
      </>
      <div>
        <UpcomingTournaments />
      </div>
      <div className="hidden md:block">
        <Matches />
      </div>
    </div>
  );
};

export default Tournament;
