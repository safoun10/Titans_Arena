import { Helmet } from "react-helmet-async";
import FlipCard from "./Components/Fetured/FlipCard";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TitanArena | Home</title>
      </Helmet>
      <h2 className="pt-9">TitanArena</h2>
      <h2 className="">TitanArena</h2>
      <FlipCard></FlipCard>
    </div>
  );
};

export default Home;
