import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./SiteStates.css";

const SiteStates = () => {
  return (
    <div>
       <Title

        primaryText="KNOW ABOUT FROM"
        secondaryText="WEBSITE"
        
      />
    
      
      <div className="max-w-6xl md:mx-auto mx-6">
        <div className="md:flex  text-white items-center gap-7 my-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl  font-bold">
              The Journey of the <br /> Titan Arena Site
            </h2>
            <p className="text-gray-400 md:text-sm md:py-2 py-6">
              Gorem npsum dolor sit amet consectetur adipiscing elit. Duis
              elementum sollici tudin augue euismod. Nulla ullamcorper nunc.
              Morbi pharetra mi tellus mollis tincidunt massa venenatis. Etiam
              lacinia ipsumultrices.
            </p>
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold">40K</h2>
                <p className="font-">Member</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">12K</h2>
                <p className="font-">Games</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold">3.6K</h2>
                <p className="font-">Reviews</p>
              </div>

            </div>
            <div>
              <button className="border-2 rounded-tl-box rounded-br-box p-3 w-full font-bold hover:bg-green-500 my-4 border-green-500">
                READ MORE
              </button>
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
