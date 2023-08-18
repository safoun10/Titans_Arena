import React from 'react';
import AllGamesBanner from './AllGamesBanner';
import AllGameCategory from './AllGameCategory';
import GamesSearch from './GamesSearch';


const AllGames = () => {
    return (
        <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
           <AllGamesBanner></AllGamesBanner>
           {/* <GamesSearch></GamesSearch> */}
           <AllGameCategory></AllGameCategory>
           
        </div>
    );
};

export default AllGames;