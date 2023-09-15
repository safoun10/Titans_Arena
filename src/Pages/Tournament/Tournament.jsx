import React from "react";
import TournamentBanner from "./TournamentBanner/TournamentBanner";
import PopularTournaments from "./TournamentBanner/PopularTournaments/PopularTournaments";
import UpcomingTournaments from "./TournamentBanner/UpcomingTournaments/UpcomingTournaments";
import Matches from "./Matches/Matches";
import TournamentsVideo from "./TournamentsVideo/TournamentsVideo";
import AddTournament from "./AddTournament/TournamentsNewItems";
import TournamentsNewItems from "./AddTournament/TournamentsNewItems";

const Tournament = () => {
  return (
    <div className=" bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <TournamentBanner></TournamentBanner>
<TournamentsNewItems />
      <PopularTournaments></PopularTournaments>
      <UpcomingTournaments />
      <Matches />
      <TournamentsVideo />
    </div>
  );
};

export default Tournament;
