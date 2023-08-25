import React from "react";
import EsportBanner from "../EsportBanner/EsportBanner";
import About from "../../About/About";
import AboutTeamEs from "../AboutTeamEs/AboutTeamEs";
import ESportVictories from "../EsportBanner/ESportVictories/ESportVictories";

const Esports = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <EsportBanner />

      <div className="mt-20">
        <AboutTeamEs></AboutTeamEs>
      </div>

      <div>
        <ESportVictories></ESportVictories>
      </div>
    </div>
  );
};

export default Esports;
