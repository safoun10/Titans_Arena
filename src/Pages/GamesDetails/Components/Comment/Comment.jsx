import React, { useState } from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  const comments = [
    {
      name: "Safoan",
      content: "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor.",
      likes: 10,
      date: "SEPTEMBER 6, 2023",
      replies: [
        {
          name: "AlaminHasan",
          content: "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.",
          likes: 10,
          date: "SEPTEMBER 6, 2023",
        },
        {
          name: "Saiful",
          content: "I learned a lot from this.",
          likes: 10,
          date: "SEPTEMBER 6, 2023",
        },
      ],
    },
    {
      name: "Jakaria Chow. Nabil",
      content: "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.",
      likes: 5,
      date: "SEPTEMBER 6, 2023",
      replies: [ {
        name: "Rahi",
        content: "Thank you!",
        likes: 10,
        date: "SEPTEMBER 6, 2023",
      },
      {
        name: "Rakib",
        content: "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.",
        likes: 10,
        date: "SEPTEMBER 6, 2023",
      },
      {
        name: "Saiful",
        content: "Thank you!",
        likes: 10,
        date: "SEPTEMBER 6, 2023",
      },
      {
        name: "Nabil",
        content: "lorem ipsum",
        likes: 10,
        date: "SEPTEMBER 6, 2023",
      },],
    },
  ];

  return (
    <div className=" mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold mb-4">Comments{comments.length}</h1>
      {comments.map((comment, index) => (
        <SingleComment
          key={index}
          name={comment.name}
          content={comment.content}
          likes={comment.likes}
          replies={comment.replies}
          date={comment.date}
        />
      ))}
    </div>
  );
};

export default Comments;
