import React, { useEffect, useState } from "react";
import Title from "../../../Components/Shared/AnimatedTitle/Titile";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const BlogAndNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://titans-arena-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        const firstThreeBlogs = data.slice(5, 8);
        setNews(firstThreeBlogs);
      });
  }, []);

  return (
    <>
      <Title
        primaryText="BLOG AND NEWS"
        secondaryText="GET UPDATE ABOUT GAMES"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mx-10">
        {news.map((e) => (
          <div key={e._id} className="border border-none p-5 w-full">
            <div>
              <img src={e.featured_image} alt="" />
            </div>
            <Link
              to={`/blog/${e._id}`}
              className="uppercase font-bold text-2xl text-white pt-3 hover:text-yellow-500 transition-all transform duration-300 "
            >
              {e.title}
            </Link>
            <p className="pt-5 text-white">
              {e.content.split(" ").slice(0, 10).join(" ")}... {"   "}
              <Link
                className="hover:text-[#45f882] group items-center"
                to={`/blog/${e._id}`}
              >
                READ MORE
                <span className="inline-block pl-2 text-[#45f882] rotate-arrow group-hover:rotate-0">
                  <FaArrowRight className="rotate-arrow -rotate-45" />
                </span>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogAndNews;
