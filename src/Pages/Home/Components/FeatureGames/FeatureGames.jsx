import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import UpcomminCountDown from "../../../Esports/UpcomminCountDown/UpcomminCountDown";
import FeatureGameCard from "./FeatureGameCard";

const FeatureGames = () => {
  return (
    <div className="mt-36">
      <Title primaryText="ESPORTS " secondaryText="NEXT MATCH" />

      <div className=" ">
        {/* <FeatureGameCard /> */}
        <UpcomminCountDown />
        {/* <FeatureGameCard /> */}
        {/* <FeatureGameCard /> */}
      </div>
    </div>
  );
};

export default FeatureGames;
