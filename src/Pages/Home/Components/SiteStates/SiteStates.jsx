import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./SiteStates.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";


const SiteStates = () => {

  return (
    <div>
      <Title primaryText="KNOW ABOUT" secondaryText="TITANS ARENA" />

      <div className="max-w-6xl md:mx-auto mx-6 py-7">
        <div className="md:flex  text-white items-center gap-7 my-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl  font-bold">
              The Journey of the <br /> Titans Arena Site
            </h2>
            <p className="text-gray-400 md:text-sm md:py-2 py-6">
              In the heart of the bustling city, the Titan Arena stands tall as
              a symbol of competition, camaraderie, and thrilling gaming
              tournaments. Our mission is to provide gamers of all levels a
              platform to showcase their skills, forge new friendships, and bask
              in the glory of victory. Join us in this epic journey, where every
              game is a story waiting to be told, and every player is a hero in
              the making.
            </p>
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  {" "}
                  <CountUp start={39000} end={40000} duration={5} />+
                </h2>
                <p className="font-">Member</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  <CountUp start={1000} end={1200} duration={5} />+
                </h2>
                <p className="font-">Games</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">
                  <CountUp start={0} end={3600} duration={5} />
                </h2>
                <p className="font-">Reviews</p>
              </div>
            </div>
            <div>
              <Link to="/support">
                <button className="border-2 rounded-tl-box rounded-br-box p-3 w-full font-bold hover:bg-green-500 my-4 border-green-500">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              className="h-96 rounded-3xl"
              src="https://www.designyourway.net/blog/wp-content/uploads/2019/01/games-wallpaper-15.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteStates;
