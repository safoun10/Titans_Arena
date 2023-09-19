import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchHeader from "./MatchHeader/MatchHeader";
import AboutMatch from "./AboutMatch/AboutMatch";
import Teaminfo from "./TeamInfo/Teaminfo";

const MatchDetails = () => {
  const [matchDetails, setMatchDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://titans-arena-server.vercel.app/espMatchFixered/${id}`)
      .then((res) => res.json())
      .then((data) => setMatchDetail(data))
      .catch((error) => {
        console.error("Error fetching match details:", error);
      });
  }, [id]);

  // Check if matchDetails is empty before rendering
  if (Object.keys(matchDetails).length === 0) {
    return <div>Loading...</div>; // You can display a loading indicator here
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
