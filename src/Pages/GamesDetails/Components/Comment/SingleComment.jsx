import { useState } from "react";

const SingleComment = ({ name, content, img, date }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="p-6 ml-10 lg:w-4/6 lg:justify-between">
      <div className="flex">
        <div className="flex items-center gap-4">
          <img
            className="w-[6.5rem] z-10 border-2 rounded-full "
            src={img}
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl">{name}</span>
            <span className="text-sm">{date}</span>
            <span className="text-lg font-semibold">{content}</span>
            <div className="flex items-center space-x-4 font-bold  text-lg text-green-300">
              {/* <button
                className={` hover:text-green-500 focus:outline-none ${
                  isLiked ? "text-green-500" : ""
                }`}
                onClick={toggleLike}
              >
                {isLiked ? "Unlike" : "Like"} {likes}
              </button>
              <button
                className=" hover:text-green-500 focus:outline-none"
                onClick={toggleReplies}
              >
                {showReplies ? "Hide Replies" : "Show Replies"}
              </button> */}
            </div>
          </div>
        </div>
        {/* <p className="font-bold text-green-300 text-xl">Reply</p> */}
      </div>
      {/* {showReplies && (
        <div className="ml-32 mt-2 space-y-4">
          {replies.map((reply, index) => (
            <div key={index} className=" mb-2 flex justify-between ">
              <div className="flex items-center mb-2 gap-4">
                <img
                  className="w-[6.5rem] z-10 border-2 rounded-full "
                  src="https://themedox.com/demo/mykd/assets/img/team/team03.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">{reply.name}</span>
                  <span className="text-sm">{reply.date}</span>
                  <span className="text-lg font-semibold">{reply.content}</span>
                  <div className="flex items-center space-x-4 font-bold  text-lg text-green-300">
                    <button
                      className={` hover:text-green-500 focus:outline-none ${
                        isLiked ? "text-green-500" : ""
                      }`}
                      onClick={toggleLike}
                    >
                      {isLiked ? "Unlike" : "Like"} {likes}
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-bold text-green-300 text-xl">Reply</p>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SingleComment;
