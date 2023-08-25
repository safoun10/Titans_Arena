import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import FeatureGameCard from "./FeatureGameCard";

const FeatureGames = () => {
  return (
    <div>
      <Title primaryText="NEW AND TOP" secondaryText="GAME INFO" />

      <div className="max-w-6xl mx-6 md:mx-auto grid gap-4">
        <FeatureGameCard />
        <FeatureGameCard />
        <FeatureGameCard />
      </div>
    </div>
  );
};

export default FeatureGames;
