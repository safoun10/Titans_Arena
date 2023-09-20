import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import useAuth from "../../../../Hooks/useAuth";
import BlogBookMark from "./Components/BlogBookMark";
import GameBookMarks from "./Components/GameBookMarks";

const BookMarkItems = () => {
  const [gameBookMark, setGameBookMark] = useState([]);
  const [blogBookMark, setBlogBookMark] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    // Function to fetch enrolledTournamentsId for a user
    const fetchBookMarkedGames = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/gameBookMark/${user?.email}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setGameBookMark(data.bookMarkGames);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookMarkGames:", error);
      }
    };

    fetchBookMarkedGames();
  }, [user?.email]);
  useEffect(() => {
    // Function to fetch enrolledTournamentsId for a user
    const fetchBookMarkedBlogs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/blogBookMarks/${user?.email}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setBlogBookMark(data.bookMarkBlog);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookMarkBlog:", error);
      }
    };

    fetchBookMarkedBlogs();
  }, [user?.email]);

  return (
    <div>
      <div>
        <Title primaryText="All Of My" secondaryText="Bookmarked" />

        <section className="grid gap-6 mx-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white font-bold flex items-center gap-1">
                <FaBookmark />
                Bookmarked Games
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4">
            {gameBookMark?.map((gameId) => (
              <GameBookMarks gameId={gameId} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 mx-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white font-bold flex items-center gap-1">
                <FaBookmark />
                Bookmarked Blogs
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4">
            {blogBookMark?.map((blogId) => (
              <BlogBookMark blogId={blogId} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookMarkItems;
