import React, { useEffect, useState } from "react";
import MatchHeader from "./MatchHeader/MatchHeader";
import AboutMatch from "./AboutMatch/AboutMatch";
import Teaminfo from "./TeamInfo/Teaminfo";
import { useParams } from "react-router-dom";

const MatchDetails = () => {
  const [matchDetails, setMatchDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/espMatchFixered/${id}`)
      .then((res) => res.json())
      .then((data) => setMatchDetail(data));
  }, [id]);

  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <MatchHeader matchDetails={matchDetails}></MatchHeader>
      <div>
        <AboutMatch />
        <Teaminfo matchDetails={matchDetails}></Teaminfo>
      </div>
    </div>
  );
};

export default MatchDetails;
