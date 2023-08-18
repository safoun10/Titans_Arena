import React from 'react';
import AllGamesBanner from './AllGamesBanner';
import AllGameCategory from './AllGameCategory';


const AllGames = () => {
    return (
        <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
           <AllGamesBanner></AllGamesBanner>
        
           <AllGameCategory></AllGameCategory>
           
        </div>
    );
};

export default AllGames;