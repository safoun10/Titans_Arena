import LatestGalleryCarousel from "./LatestGalleryCarousel";
import { MdDoubleArrow, MdPlayArrow } from "react-icons/md";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
const LatestGallery = () => {
  return (
    <div className="max-w-7xl mx-auto ">
        <Title
        primaryText="GET NEW IMAGE"
        secondaryText="FROM NEW GAMES"
        
      />
    
      <div className="md:flex text-center justify-center items-center py-10">
        <div className="md:w-1/3 text-white ">
          <h2 className="text-3xl font-bold">Letest Gallery</h2>
          <p className="font-semibold text-sm text-[#45f882]">Letest Gallery</p>
        </div>
        <div className="text-white flex items-center relative mx-3">
          <MdDoubleArrow
            style={{
              animation: "fadeInOut .5s ease-in-out infinite",
              color: "#45f882", // Green color
            }}
            className="h-12 w-12 absolute right-7"
          />

          <MdDoubleArrow
            style={{
              animation: "fadeInOut2 .5s ease-in-out infinite",
              color: "white", // Green color
            }}
            className="h-12 w-12"
          />
        </div>
        <div className="md:w-3/4 ">
          <LatestGalleryCarousel />
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes fadeInOut2 {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LatestGallery;
