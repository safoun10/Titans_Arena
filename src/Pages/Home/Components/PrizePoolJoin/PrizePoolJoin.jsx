import { Link } from "react-router-dom";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./PrizePoolJoin.css";

import Countdown from "react-countdown";
const   PrizePoolJoin = () => {
  return (
    <div className="max-w-6xl mx-auto text-white my-20">
      <div className="lg:flex items-center">
        <div className="lg:w-2/6 text-start">
          <h3 className="text-lg font-bold">CHECK OUT OUR NEXT</h3>
          <h2 className="text-3xl font-bold">GAMING TOURNAMENTS !</h2>
          <p className="text-gray-400 font-semibold mt-2 mb-6">
            Enter the Arena, Show Your Skills, and Emerge as the Champion in Our
            Thrilling and Rewarding Gaming Tournaments.
          </p>
          <Link to="/eSports" className="bg-green-600 py-2 px-6 rounded-r-3xl text-black font-bold">
            JOIN WITH US
          </Link>
        </div>
        <div className="lg:w-2/6 lg:pt-0 pt-8 ">
          <h2 className="text-3xl font-bold text-center ">PRIZE POOL</h2>

          <p className=" w-32 mx-auto text-center text-black px-6 py-2 lg:my-0 my-3 text-xl font-bold rounded-3xl bg-green-500">
            $8000
          </p>

          <div className="text-center relative">
            <img
              className="h-48 mx-auto my-2"
              src="https://themebeyond.com/beyond/dune/wp-content/uploads/2023/03/a.png"
              alt="img"
            />
            <img
              className="absolute top-5 left-[4.4rem] opacity-60 "
              src="https://themebeyond.com/beyond/dune/wp-content/uploads/2023/03/Group-301-2.png"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-2/6 mt-10 mx-auto">
          {/* timer starts */}
          <div className="grid grid-flow-col mx-auto gap-5 text-center auto-cols-max ml-2">
            <div className="flex flex-col p-3 bg-green-600 rounded-box">
              <Countdown
                date={Date.now() + 15 * 24 * 60 * 60 * 1000}
                renderer={({ days }) => (
                  <>
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": days }}></span>
                    </span>
                    days
                  </>
                )}
              />
            </div>
            <div className="flex flex-col p-3 bg-green-600 rounded-box">
              <Countdown
                date={Date.now() + 10 * 60 * 60 * 1000}
                renderer={({ hours }) => (
                  <>
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": hours }}></span>
                    </span>
                    hours
                  </>
                )}
              />
            </div>
            <div className="flex flex-col p-3 bg-green-600 rounded-box">
              <Countdown
                date={Date.now() + 24 * 60 * 60 * 1000}
                renderer={({ minutes }) => (
                  <>
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": minutes }}></span>
                    </span>
                    min
                  </>
                )}
              />
            </div>
            <div className="flex flex-col p-3 bg-green-600 rounded-box">
              <Countdown
                date={Date.now() + 60 * 1000}
                renderer={({ seconds }) => (
                  <>
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": seconds }}></span>
                    </span>
                    sec
                  </>
                )}
              />
            </div>
          </div>
          {/* timer ends */}
        </div>
      </div>
    </div>
  );
};

export default PrizePoolJoin;
