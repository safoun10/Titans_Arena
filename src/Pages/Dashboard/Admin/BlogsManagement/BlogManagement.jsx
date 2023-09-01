import React, { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import useAuth from "../../../../Hooks/useAuth";

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://titans-arena-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="text-white w-full ">
      <h3 className="text-3xl font-semibold my-4">
        Total blogs: {blogs.length}
      </h3>
      <div className="border">
        <table className="table  w-full">
          {/* head */}
          <thead className="text-white bg-green-500 text-xl">
            <tr>
              <th>Serial</th>
              <th>AuthorName</th>
              <th>Title</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg font-bold">
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <th>{index + 1}</th>
                <td>{blog.author}</td>
                <td>{blog.title}</td>
                <td>{blog.date}</td>
                <td>
                  <button className="btn btn-ghost bg-red-600  text-white">
                    <FaDeleteLeft/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManagement;
