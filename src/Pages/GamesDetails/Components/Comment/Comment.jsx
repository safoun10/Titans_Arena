import React, { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  // const comments = [
  //   {
  //     name: "Safoan",
  //     content:
  //       "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor.",
  //     likes: 10,
  //     date: "SEPTEMBER 6, 2023",
  //     replies: [
  //       {
  //         name: "AlaminHasan",
  //         content:
  //           "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today.",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //       {
  //         name: "Saiful",
  //         content: "I learned a lot from this.",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Jakaria Chow. Nabil",
  //     content:
  //       "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.",
  //     likes: 5,
  //     date: "SEPTEMBER 6, 2023",
  //     replies: [
  //       {
  //         name: "Rahi",
  //         content: "Thank you!",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //       {
  //         name: "Rakib",
  //         content:
  //           "Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor enim ad minim veniam quis nostrud today.",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //       {
  //         name: "Saiful",
  //         content: "Thank you!",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //       {
  //         name: "Nabil",
  //         content: "lorem ipsum",
  //         likes: 10,
  //         date: "SEPTEMBER 6, 2023",
  //       },
  //     ],
  //   },
  // ];
const [comments, setComments] = useState([])

const url = "http://localhost:5000/comments"
useEffect( ()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data => {
    console.log(data)
    setComments(data)
  })
},[])

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Comments{comments.length}</h1>
        {comments.map((comment, index) => (
          <SingleComment
            key={index}
            name={comment.user_name}
            img={comment.user_img}
            content={comment.comment_text}
            // likes={comment.likes}
            // replies={comment.replies}
            // date={comment.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
