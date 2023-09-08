import React from "react";
import {
  AiFillAndroid,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

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
      <div className=" bg-[url('https://media.istockphoto.com/id/1266188242/photo/futuristic-dirty-floor-with-neon-fluorescence-lamps.jpg?b=1&s=612x612&w=0&k=20&c=OZ4UxWHf8vYVPkQ9aLUc4UtQyxwB8IizlVQyly62aL0=')] flex  flex-col-reverse md:flex-row gap-10 justify-around items-center p-10 pt-24 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl  font-bold  font-LeagueSpartan">
          Come <span className="text-[#1BBF72]">Teach</span> With Us
        </h1>
        <p className="text-lg  mt-2">
          Become an instructor and change
          <br /> lives — including your own
        </p>

        <Link to="/instructorSignUp">
          <button className="mt-4 md:mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img
          className=""
          src="https://images7.alphacoders.com/131/1313555.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="mt-6 md:mt-12 lg:mt-20 mb-8 md:mb-16 lg:mb-24">
      <div className="w-full md:w-1/2 mx-auto text-center px-4 lg:px-8">
        <h2 className="text-xl md:text-3xl  font-bold">
          Become an Gamer today
        </h2>
        <p className="mt-3 md:mt-4 text-base md:text-lg">
          Join one of the world’s largest online learning marketplaces.
        </p>
        <div className="text-center mt-4">
          <Link to="/instructorSignUp">
            <button className="mt-4 md:mt-6 bg-black w-full md:w-80 p-3 md:p-4 text-lg md:text-xl text-white font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
