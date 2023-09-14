import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import UpcomminCountDown from "../../../Esports/UpcomminCountDown/UpcomminCountDown";

const FeatureGames = () => {
  return (
    <div className="mt-36">
      <Title primaryText="ESPORTS " secondaryText="NEXT MATCH" />

      <div>
        <UpcomminCountDown />
      </div>
    </div>
  );
};

export default FeatureGames;
