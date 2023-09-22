import React from "react";
import AboutTeamEs from "../AboutTeamEs/AboutTeamEs";
import ESportVictories from "../EsportBanner/ESportVictories/ESportVictories";
import MatchFixered from "../MatchFixered/MatchFixered";
import EspSponsored from "../EspSponsored/EspSponsored";
import EspBanner from "../EspBanner/EspBanner";
import { Helmet } from "react-helmet-async";

const Esports = () => {
  <Helmet>
    <title>Titans Arena || Esports</title>
  </Helmet>;
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <EspBanner />

      <div className="mt-20 max-w-7xl mx-auto">
        <AboutTeamEs></AboutTeamEs>
      </div>

      <div className="mb-10 mt-28 bg-black bg-opacity-80 ">
        <ESportVictories></ESportVictories>
      </div>

      <div>
        <MatchFixered></MatchFixered>
      </div>
      <div>
        <EspSponsored></EspSponsored>
      </div>
    </div>
  );
};

export default Esports;
