import AllGames from "./Components/AllGames/AllGames";
import FeatureGames from "./Components/FeatureGames/FeatureGames";
import FlipCard from "./Components/Fetured/FlipCard";
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <FlipCard />
      <AllGames />
      <FeatureGames />
    </div>
  );
};

export default Home;
