import React from "react";
import AllGamesBanner from "./AllGamesBanner";
import AllGameCategory from "./AllGameCategory";
import { Helmet } from "react-helmet-async";

const AllGames = () => {
  return (
    <>
      <Helmet>
        <title>Titans Arena || All Games</title>
      </Helmet>
      <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
        <AllGamesBanner></AllGamesBanner>
        <AllGameCategory></AllGameCategory>
      </div>
    </>
  );
};

export default AllGames;
