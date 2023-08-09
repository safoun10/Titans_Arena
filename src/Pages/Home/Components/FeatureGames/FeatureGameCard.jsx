import React from "react";

const FeatureGameCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#121a23",
        backgroundImage:
          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
      }}
      className="text-white flex gap-7 border-2 rounded-3xl "
    >
      <div className="w-1/3">
        <img
          className="rounded-3xl h-64"
          src="https://themedox.com/demo/mykd/assets/img/others/about_img01.jpg"
          alt=""
        />
      </div>
      <div className="w-2/3 my-6">
        <div className="flex">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold">PUBG</h2>
            <p className="text-lg text-warning ">BattleGround</p>
            <p className="text-sm my-4">
              Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum
              sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra
              tellus miolslis, tincidunt massa venenatis.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src="https://themedox.com/demo/mykd/assets/img/icons/features_icon01.png"
                alt=""
              />
              <p>Chichi Dragon Ball</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://themedox.com/demo/mykd/assets/img/icons/features_icon01.png"
                alt=""
              />
              <p>Chichi Dragon Ball</p>
            </div>
            <div className="flex items-center">
              <img
                src="https://themedox.com/demo/mykd/assets/img/icons/features_icon01.png"
                alt=""
              />
              <p>Chichi Dragon Ball</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <div className="py-3 bg-slate-600 px-4 rounded-lg">Events</div>
          <div className="py-3 bg-slate-600 px-4 rounded-lg">Live Stream</div>
          <div className="py-3 bg-slate-600 px-4 rounded-lg">Discord</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGameCard;
