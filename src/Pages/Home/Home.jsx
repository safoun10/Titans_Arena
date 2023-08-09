import FeatureGames from "./Components/FeatureGames/FeatureGames";
import Games from "./Components/AllGames/AllGames";
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <Games />
      <FeatureGames />
    </div>
  );
};

export default Home;
