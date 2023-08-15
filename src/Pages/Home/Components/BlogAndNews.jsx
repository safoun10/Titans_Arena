import React from "react";
import blog1 from "../../../../public/blogImg/gallery-3-560x370.jpg";
import blog2 from "../../../../public/blogImg/post-1-560x370.jpg";
import blog3 from "../../../../public/blogImg/video-post-560x370.jpg";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";
const BlogAndNews = () => {
  return (
    <>
    <Title
        primaryText="BLOG AND NEWS"
        secondaryText="GET UPDATE ABOUT GAMES"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="border border-none p-5 w-full">
          <div>
            <img src={blog1} alt="" />
          </div>
          <h1 className="uppercase font-bold text-2xl text-white pt-3 hover:text-yellow-500 transition-all transform duration-300 ">
            About Space and World 
          </h1>
          <p className="pt-5 text-white"> 
            About Space and World ABOUT SPACE AND WORLD Habitasse platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa
            sapien faucibus
          </p>
        </div>
        <div className="border border-none p-5 w-full">
          <div>
            <img src={blog2} alt="" />
          </div>
          <h1 className="uppercase font-bold text-2xl text-white pt-3 hover:text-yellow-500 transition-all transform duration-300 ">
          NEW TRAILER IS RELEASED!
          </h1>
          <p className="pt-5 text-white"> 
            About Space and World ABOUT SPACE AND WORLD Habitasse platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa
            sapien faucibus
          </p>
        </div>
        <div className="border border-none p-5 w-full">
          <div>
            <img src={blog3} alt="" />
          </div>
          <h1 className="uppercase font-bold text-2xl text-white pt-3 hover:text-yellow-500 transition-all transform duration-300 ">
          PRICE LIST OF THE GAMES
          </h1>
          <p className="pt-5 text-white"> 
            About Space and World ABOUT SPACE AND WORLD Habitasse platea
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper massa
            sapien faucibus
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogAndNews;
