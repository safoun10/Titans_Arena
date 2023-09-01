import React from "react";
import Marquee from "react-fast-marquee";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";

const EspSponsored = () => {
  const data = [
    {
      name: "",
      SocialPic: "https://i.ibb.co/3Crpj65/pngwing-com-3.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/09rpw0N/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/H41Wy3p/pngwing-com-1.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/Wxkh8jm/pngwing-com-2.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/09rpw0N/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/3Crpj65/pngwing-com-3.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/YN4Gzf0/pngwing-com-4.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/KWjcLZR/pngwing-com-5.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/KWVpgGG/pngwing-com-6.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/gmWfzG0/pngwing-com-8.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/09rpw0N/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/KWjcLZR/pngwing-com-5.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/KWVpgGG/pngwing-com-6.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/09rpw0N/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/wrWVzPt/pngwing-com-5.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/KWVpgGG/pngwing-com-6.png",
      esponredPic: "",
    },
  ];

  return (
    <div className=" w-full ">
      <div className="bg-[url('https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/08/17/16291886670895.jpg')] mt-20">
        <div className=" bg-black bg-opacity-80 ">
          <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container ">
            <div className="  lg:w-1/2 lg:ml-12 lg:p- p-2 flex items-center">
              <div className="">
                <Title
                  primaryText="Esplore Our Midea partner"
                  secondaryText="OUR SPONSRED AND MEDIA PARTNER"
                ></Title>
              </div>
            </div>
            <h1>amr spona</h1>
          </div>
          <div>
            {/* ------------------------------ */}
            <div className="container ml-auto mr-auto flex  items-start border p-2  ">
              <Marquee
                direction="right"
                speed={50} // Adjust the speed as needed
                gradientColor={[0, 0, 0]} // You can customize the gradient color
                gradientWidth={30}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto items-center p-4  border-green-500  flex justify-center  border  w-24 h-24 "
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
            <div className="container ml-auto mr-auto flex  items-start border p-2  ">
              <Marquee
                direction="left"
                speed={50} // Adjust the speed as needed
                gradientColor={[0, 0, 0]} // You can customize the gradient color
                gradientWidth={30}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" mx-auto items-center p-4  border-green-500  border-t-2 flex justify-center  border  w-24 h-24 "
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
