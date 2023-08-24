import React, { useEffect, useState } from "react";
import "./FlipCard.css";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Link } from "react-router-dom";

const FlipCard = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://titans-arena-server.vercel.app/games")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setGames(data.slice(0, 4));
      });
  }, []);
  const cardData = [
    {
      image: "https://wallpapercave.com/wp/wp7897048.jpg",
      buttonText: " Details",
    },
    {
      image:
        "https://www.roccat.com/cdn/shop/articles/unnamed_85098cea-a4de-47ed-b6f7-90d1fa64f116.jpg?v=1623429494",
      buttonText: "Details",
    },
    {
      image: "https://images.hdqwalls.com/wallpapers/battlefield-game-4k.jpg",
      buttonText: "View Details",
    },
    {
      image:
        "https://i.ytimg.com/vi/tj6FGxy5WuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJ0NkD5Chs5TG-Dg-qgTcMnWA4Pw",
      buttonText: "Details",
    },
  ];
  return (
    <div>
      <Title
        primaryText="WELCOME OUR GALLERY SECTION"
        secondaryText="it's awesome!"
      />

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {games.map((card, index) => (
              <div key={index} className="book">
                <div className="page">
                  <div >
                    <img
                      src={card.image}
                      className="front-page  bg-cover bg-center relative border border-blue-500"
                      alt=""
                    />
                    <div className="after-content bg-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-300">
                      <img
                        src={card.image}
                        alt="Content"
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="back-page">
                    <p>Surprise! SAFOAN BROOOOOOOOOOO</p>
                    <Link to={`/games/${card._id}`}>
                    <button className="btn">Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
