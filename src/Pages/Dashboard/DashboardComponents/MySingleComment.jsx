import { useEffect, useState } from "react";
import { FaPlay, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MySingleComment = ({ name, content, img, date, game_id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [gameDetails, setGameDetails] = useState({});
  useEffect(() => {
    fetch(`https://titans-arena-server.vercel.app/games/${game_id}`)
      .then((res) => res.json())
      .then((data) => setGameDetails(data));
  }, []);
  const {
    _id,
    image,
    review,
    title,
    level,
    genre,
    description,
    rating,
    platforms,
    releaseDate,
    developer,
    publisher,
    ageRating,
    modes,
    tags,
    languageSupport,
    minimumRequirements,
    recommendedRequirements,
    features,
    systemSupport,
    category,
  } = gameDetails;

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div>
      <div className="my-5">
        <hr />
      </div>
      <article
        style={{
          borderRadius: "21px",
          background: "#111827",
          boxShadow: "0px 4px 8px 0px rgba(42, 100, 83, 0.80)",
          backdropFilter: "blur(10px)",
        }}
        className="p-6 text-base bg-white border-t border-b mb-4 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="flex justify-between">
          <h3 className="text-red-500 text-2xl font-bold dark:text-red-400 mb-2">
            Game Name
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-green-500 text-2xl flex gap-1 items-center hover:text-green-600 font-bold dark:text-green-400 mb-2">
              <Link to={`/games/${_id}`}>{title}</Link>
              <FaPlay className="h-4 w-4" />
            </p>
          </div>
        </div>
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={img}
                alt="Michael Gough"
              />
              {name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                {date}
              </time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
          <div
            id="dropdownComment1"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownMenuIconHorizontalButton"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Remove
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">{content}</p>
        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex gap-1  items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <FaThumbsUp />
            Like
          </button>
          <button
            onClick={toggleReplies}
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>
      {showReplies ? (
        <article
          style={{
            borderRadius: "21px",
            background: "#111827",
            boxShadow: "22px 22px 43px #070a10, -12px -5px 43px #1b263e",
          }}
          // className="p-6 mb-3 ml-6 mt-5 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
          className="p-6 text-base ml-12 bg-white border-t border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        >
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src={img}
                  alt="Jese Leos"
                />
                {name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-12" title="February 12th, 2022">
                  {date}
                </time>
              </p>
            </div>
            <button
              id="dropdownComment2Button"
              data-dropdown-toggle="dropdownComment2"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment2"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">{content}</p>
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex gap-1  items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <FaThumbsUp />
              Like
            </button>
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MySingleComment;
