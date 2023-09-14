import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);

  const url = `https://titans-arena-server.vercel.app/singleGameComments/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      });
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">
          Comments: {comments.length}
        </h1>
        {comments.map((comment, index) => (
          <SingleComment
            key={index}
            name={comment.user_name}
            img={comment.user_img}
            content={comment.comment_text}
            date={comment.Date}
            // likes={comment.likes}
            // replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
