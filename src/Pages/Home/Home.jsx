import AllGames from "./Components/AllGames/AllGames";
import FeatureGames from "./Components/FeatureGames/FeatureGames";
import { Helmet } from "react-helmet-async";
import FlipCard from "./Components/Fetured/FlipCard";
import "./Home.css";
import SiteStates from "./Components/SiteStates/SiteStates";
import Banner from "./Components/Banner";
const Home = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Helmet>
        <title>TitanArena | Home</title>
      </Helmet>
      <Banner/>
      <FlipCard />
      <AllGames />
      <FeatureGames />
      <SiteStates />
    </div>
  );
};

export default Home;
