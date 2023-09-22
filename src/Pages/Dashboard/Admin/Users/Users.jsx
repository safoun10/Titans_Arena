import React, { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/users`).then((data) => {
      setUsers(data.data);
      console.log(data);
    });
  }, []);

  const makeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((data) => {
      console.log(data);
      if (data.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const Delete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((data) => {
          console.log(data);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };

  return (
    <div className="text-white mb-20 md:w-full ">
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-scroll  lg:overflow-hidden ">
        <table className="table">
          {/* head */}
          <thead className="text-white bg-green-500 text-xl">
            <tr className="">
              <th className="md:block hidden ">Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="md:text-lg  font-bold">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th className="md:block hidden">{index + 1}</th>
                <td>{user.name}</td>
                <td className="">{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => makeAdmin(user)}
                      className=" w-full h-full flex border w rounded border-none bg-green-500 hover:bg-green-700 transition-all duration-500 ease-in-out transform justify-center py-3  text-black"
                      style={{
                        "--path":
                          "0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",
                        fontFamily: "resobot-bold",
                        WebkitClipPath: "polygon(var(--path))",
                        clipPath: "polygon(var(--path))",
                      }}
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => Delete(user)}
                    className=" bg-red-600 w-full h-full flex justify-center items-center py-3 hover:bg-red-900  border w rounded border-none text-white transition-all duration-500 ease-in-out transform"
                    style={{
                      "--path":
                        "0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",
                      fontFamily: "resobot-bold",
                      WebkitClipPath: "polygon(var(--path))",
                      clipPath: "polygon(var(--path))",
                    }}
                  >
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