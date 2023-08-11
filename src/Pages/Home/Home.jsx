import AllGames from "./Components/AllGames/AllGames";
import FeatureGames from "./Components/FeatureGames/FeatureGames";
import { Helmet } from "react-helmet-async";
import FlipCard from "./Components/Fetured/FlipCard";
import "./Home.css";
import SiteStates from "./Components/SiteStates/SiteStates";
import Banner from "./Components/Banner";
import LatestGallery from "./Components/LatestGallery/LatestGallery";
import BlogAndNews from "./Components/BlogAndNews";
import StayConnect from "./Components/StayConnect/StayConnect";
import OurTeamMembers from "./Components/OurTeamMembers/OurTeamMembers";
const Home = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Helmet>
        <title>TitanArena | Home</title>
      </Helmet>
      <Banner />
      <FlipCard />

      <AllGames />
      <FeatureGames />
      <SiteStates />
      <LatestGallery />
      <BlogAndNews />
      <OurTeamMembers />
      <StayConnect />
    </div>
  );
};

export default Home;
