import { Helmet } from "react-helmet-async";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>TitanArena | Home</title>
      </Helmet>
      <h2 className="pt-9">TitanArena</h2>
      <p>Bangladesh</p>
    </div>
  );
};

export default Home;
