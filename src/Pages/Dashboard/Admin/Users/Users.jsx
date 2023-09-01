import React, { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState([]);
  const url = `https://titans-arena-server.vercel.app/users`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="text-white w-full ">
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="border">
        <table className="table  w-full">
          {/* head */}
          <thead className="text-white bg-green-500 text-xl">
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-lg font-bold">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button className="btn btn-ghost bg-orange-600 text-white">
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost bg-red-600  text-white">
                    <FaTrashAlt />
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

export default Users;
