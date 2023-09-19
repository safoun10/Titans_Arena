import React, { useEffect, useState } from "react";
import TournamentBanner from "./TournamentBanner/TournamentBanner";
import PopularTournaments from "./TournamentBanner/UpcommingTournaments/UpcommingTournaments";
import UpcomingTournaments from "./TournamentBanner/PopularTournaments/PopularTournaments";
import Matches from "./Matches/Matches";
import TournamentsVideo from "./TournamentsVideo/TournamentsVideo";
import AddTournament from "./AddTournament/TournamentsNewItems";
import TournamentsNewItems from "./AddTournament/TournamentsNewItems";
import axios from "axios";

const Tournament = () => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    axios
      .get("https://titans-arena-server.vercel.app/tournaments")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className=" bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <TournamentBanner></TournamentBanner>
      <TournamentsNewItems />
      {data.length > 0 ? <PopularTournaments /> : <></>}

      <UpcomingTournaments />
      <Matches />
      <TournamentsVideo />
    </div>
  );
};

export default Tournament;
