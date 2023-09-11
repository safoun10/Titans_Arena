import React, { useState } from "react";

const TournamentsVideo = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const esportsCards = [
    {
      title: "Video 1",
      videoLink:
        "https://www.youtube.com/embed/XB7Lzt_stNY?si=_wKjOoAgXtKdZpzt",
      text: "Lorem ipsum dolor, ",
    },
    {
      title: "Video 2",
      videoLink:
        "https://www.youtube.com/embed/UXO2Xd6oroE?si=kF9MexPcUt96c4Bq",
      text: "Lorem ipsum dolor, ",
    },
    {
      title: "Video 3",
      videoLink:
        "https://www.youtube.com/embed/XB7Lzt_stNY?si=_wKjOoAgXtKdZpzt",
      text: "Lorem ipsum dolor ",
    },
    {
      title: "Video 4",
      videoLink:
        "https://www.youtube.com/embed/nM3-6LFdd7M?si=1veEdv4CUxmGYq3m",
      text: "Lorem ipsum dolor,",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto  mb-32 mt-28 ">
      <div className="border-l-2 w-72  font-extrabold text-3xl mb-10 text-yellow-500 border-t-2 rounded-md border-green-400 p-2 uppercase">
        <h3> Match Videos</h3>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center space-x-4 ">
        {esportsCards.map((card, index) => (
          <a
            key={index}
            // href={card.videoLink}
            className="group relative block bg-black w-80 h-80"
          >
            <iframe
              //   title={card.title}
              src={card.videoLink}
              className={`absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity ${
                videoPlaying ? "opacity-100" : ""
              }`}
              onMouseEnter={() => setVideoPlaying(true)}
              onMouseLeave={() => setVideoPlaying(false)}
              allowFullScreen
            ></iframe>

            <div className="relative p-4 mt-48  sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Esports
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                {card.title}
              </p>

              <div className="">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{card.text}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TournamentsVideo;
