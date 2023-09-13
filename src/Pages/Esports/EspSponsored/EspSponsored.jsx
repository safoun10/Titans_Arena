import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";

const EspSponsored = () => {
  const data = [
    {
      name: "",
      SocialPic: "https://i.ibb.co/xgYrGJQ/pngwing-com-12.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/J285tWN/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/y4fhvWp/pngwing-com-8.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/BrsvqNt/pngwing-com-7.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/ky9FnMw/pngwing-com-10.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/j8VCB1P/pngwing-com-6.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/jHzqLyN/pngwing-com-1.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/n1H69XZ/pngwing-com.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/nRmpGwW/pngwing-com-3.png",
      esponredPic: "",
    },

    {
      name: "",
      SocialPic: "https://i.ibb.co/YkNPq6d/pngwing-com-13.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/C6mMCcB/pngwing-com-14.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/j8VCB1P/pngwing-com-6.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/BrsvqNt/pngwing-com-7.png",
      esponredPic: "",
    },
  ];

  return (
    <div className=" w-full ">
      <div className="bg-[url('')] mt-20">
        <div className=" bg-black  bg-opacity-20  ">
          <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container ">
            <div className="max-w-7xl mx-auto">
              <div className="">
                <Title
                  primaryText="Esplore Our Midea partner"
                  secondaryText="OUR SPONSRED AND MEDIA PARTNER"
                ></Title>
              </div>
            </div>
          </div>
          <div>
            {/* ------------------------------ */}
            <div className="max-w-7xl ml-auto mr-auto flex  items-start border-yellow-400 shadow-2xl  rounded-2xl border-l-2 p-2  ">
              <Marquee
                className="rounded-r-3xl border-r-black border-r-4"
                direction="right"
                speed={50} // Adjust the speed as needed
                gradientColor={[0, 0, 0]} // You can customize the gradient color
                gradientWidth={30}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto items-center p-4  border-green-500  flex justify-center  hover:border-yellow-400 rounded-full hover:border-double hover:border-t-2  w-52  h-52 "
                  >
                    <img
                      src={item.SocialPic}
                      // alt={item.name}
                      style={{ width: "160px", height: "auto" }}
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="max-w-7xl ml-auto mr-auto flex  items-start  p-2    border-r-2  border-green-500 mt-8 rounded-3xl  ">
              <Marquee
                className="rounded-l-3xl border-l-black border-l-4"
                direction="left"
                speed={50} // Adjust the speed as needed
                gradientColor={[0, 0, 0]} // You can customize the gradient color
                gradientWidth={30}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto items-center p-4  border-green-500   border-t-2 border-b-2 flex justify-center  border-5  w-36 h-36 mt-5 rounded-full  "
                  >
                    <img
                      src={item.SocialPic}
                      // alt={item.name}
                      style={{ width: "160px", height: "auto" }}
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspSponsored;
