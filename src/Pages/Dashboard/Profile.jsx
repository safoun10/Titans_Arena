import React from "react";
import {
  AiFillAndroid,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="text-white">
      <h1 className="text-xl md:text-3xl font-bold mt-5 text-center">
        Welcome{" "}
        <span className="text-orange-600">
          {user ? user.displayName : "Sir"}
        </span>{" "}
        !
      </h1>
      <div className="flex flex-col md:flex-row mt-10 gap-5 items-center justify-center">
        <figure className=" p-3 flex justify-center rounded-lg border-r-1">
          <img
            className="rounded-full w-72 h-72"
            src={
              user?.photoURL ||
              "https://themedox.com/demo/mykd/assets/img/team/team02.png"
            }
            alt={`${user?.displayName}'s profile photo`}
          />
        </figure>

        <div className="flex flex-col gap-5">
          <h1 className="flex items-center bg-orange-500 bg-opacity-50 p-2  gap-2 text-lg font-medium">
            <AiOutlineProfile />
            UserId: {user?.uid}
          </h1>
          <h1 className="flex items-center bg-orange-500 bg-opacity-50 p-2  gap-2 text-lg font-medium">
            <AiFillAndroid />
            Name: {user?.displayName}
          </h1>
          <h1 className="flex items-center bg-orange-500 bg-opacity-50 p-2  gap-2 text-lg font-medium">
            <AiOutlineMail />
            Email: {user?.email}
          </h1>
          <h1 className="flex items-center bg-orange-500 bg-opacity-50 p-2  gap-2 text-lg font-medium">
            <AiOutlinePhone />
            Phone: {user?.phoneNumber ? user.phoneNumber : "null"}
          </h1>
          <h1 className="flex items-center bg-orange-500 bg-opacity-50 p-2  gap-2 text-lg font-medium">
            <MdLocationPin />
            Country: {user?.phoneNumber ? user.phoneNumber : "null"}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
