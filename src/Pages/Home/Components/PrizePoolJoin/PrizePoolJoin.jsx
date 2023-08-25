import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./PrizePoolJoin.css";
const PrizePoolJoin = () => {
  return (
    
    <div className="max-w-6xl mx-auto text-white my-20">
      

      <div className="flex items-center">
        <div className="w-2/6  ">
          <h3 className="text-lg font-bold">CHECK OUT OUR NEXT</h3>
          <h2 className="text-3xl font-bold">GAMING TOURNAMENTS !</h2>
          <p className="text-gray-400 font-semibold my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            facilis sint, sit illo iure odit?
          </p>
          <button className="bg-green-600 py-2 px-6 rounded-r-3xl text-black font-bold">
            JOIN WITH US
          </button>
        </div>
        <div className="w-2/6 ">
          <h2 className="text-3xl font-bold text-center ">PRIZE POOL</h2>

          <p className=" w-32 mx-auto text-center text-black px-6 py-2 text-xl font-bold rounded-3xl bg-green-500 ">
            $8000
          </p>

          <div class="text-center relative">
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
        <div className="w-2/6 ">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-green-600 rounded-box ">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-green-600 rounded-box ">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-green-600 rounded-box ">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-green-600 rounded-box ">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 42 }}></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default PrizePoolJoin;
