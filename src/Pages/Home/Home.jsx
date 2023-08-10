
import { Helmet } from "react-helmet-async";
import FlipCard from "./Components/Fetured/FlipCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TitanArena | Home</title>
      </Helmet>
      <FlipCard></FlipCard>

    </div>
  );
};

export default Home;
