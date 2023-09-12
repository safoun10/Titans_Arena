import React, { useEffect, useState } from "react";
import "./FlipCard.css";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { Link } from "react-router-dom";

const FlipCard = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("flipCardGames.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.slice(0, 4));
      });
  }, []);

  const cardData = [
    // Card data objects
  ];

  return (
    <div>
      <Title
        primaryText="WELCOME OUR GALLERY SECTION"
        secondaryText="it's awesome!"
      />

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center">
            <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {games.map((card, index) => (
                <div key={index} className="book">
                  <div className="page">
                    <div>
                      <img
                        src={card.image}
                        className="front-page bg-cover bg-center relative border border-blue-500"
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
                      <div className="back-page flex flex-col justify-between h-full">
                        <div>
                          <div className="font-bold">{card.game_name}</div>
                          <div className="text-base">{card.game_history}</div>
                        </div>
                        <Link to={`/allgame`}>
                          <button className="btn mb-4 mt-auto">See More games</button>
                        </Link>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
