import React, { useEffect, useState } from "react";
import TournamentBanner from "./TournamentBanner/TournamentBanner";
import Matches from "./Matches/Matches";
import TournamentsVideo from "./TournamentsVideo/TournamentsVideo";

import TournamentsNewItems from "./AddTournament/TournamentsNewItems";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import UpcommingTournaments from "./TournamentBanner/UpcommingTournaments/UpcommingTournaments";
import PopularTournaments from "./TournamentBanner/PopularTournaments/PopularTournaments";

const Tournament = () => {
  const [data, setData] = useState([]);
  const { user } = useAuth();

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
      {data.length > 0 ? <UpcommingTournaments user={user} /> : <></>}

      <PopularTournaments />
      <Matches />
      <TournamentsVideo />
    </div>
  );
};

export default Tournament;
