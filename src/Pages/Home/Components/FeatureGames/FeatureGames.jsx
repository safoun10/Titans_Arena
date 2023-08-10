import FeatureGameCard from "./FeatureGameCard";


const FeatureGames = () => {
  return (
    <div className="max-w-6xl mx-6 md:mx-auto grid gap-4">
      <FeatureGameCard/>
      <FeatureGameCard/>
      <FeatureGameCard/>
    </div>
  );
};

export default FeatureGames;
