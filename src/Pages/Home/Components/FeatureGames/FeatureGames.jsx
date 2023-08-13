import FeatureGameCard from "./FeatureGameCard";

const FeatureGames = () => {
  return (
    <div>
       <div className="text-center my-10">
        <h3 className="text-[#68fb9a] font-semibold ">NEW AND TOP</h3>
        <h1 className="text-white text-4xl font-bold my-2">GAME INFO</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 mx-auto"
          fill="#68fb9a"
          viewBox="0 0 65 5"
          fillRule="evenodd"
        >
          <path
            d="M968,5630h65l-4,5H972Z"
            transform="translate(-968 -5630)"
          ></path>
        </svg>
      </div>
      <div className="max-w-6xl mx-6 md:mx-auto grid gap-4">
        <FeatureGameCard />
        <FeatureGameCard />
        <FeatureGameCard />
      </div>
    </div>
  );
};

export default FeatureGames;