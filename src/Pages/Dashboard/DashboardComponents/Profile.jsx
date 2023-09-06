import React from "react";
import {
  AiFillAndroid,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="text-white">
      {/* <div>
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
      </div> */}
      <div className="">
        <Parallax>
          <div className="bg-[url('https://w.forfun.com/fetch/a9/a9ce3832408d37e4a0ac6f97230b3297.jpeg')] bg-no-repeat bg-cover h-[300px] "></div>
        </Parallax>

        <div className="h-36 bg-slate-700 flex w-12/12 relative ">
          <div className="flex gap-4 w-4/12 justify-center">
            <div className="flex flex-col justify-center items-center">
              <FaCommentAlt className="text-yellow-500" />
              <p className="font-bold text-lg">865</p>
              <p className="font-bold text-lg">Comments</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaUsersViewfinder className="text-yellow-500" />
              <p className="font-bold text-lg">865</p>
              <p className="font-bold text-lg">Reviews</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaCommentAlt className="text-yellow-500" />
              <p className="font-bold text-lg">865</p>
              <p className="font-bold text-lg">Favorite</p>
            </div>
          </div>
          <div className="text-center  w-4/12  justify-center flex">
            <div className=" flex flex-col items-center absolute bottom-5 ">
              <img
                className="rounded-full  border-8 p-1 w-32 h-32 "
                src={
                  user?.photoURL ||
                  "https://themedox.com/demo/mykd/assets/img/team/team02.png"
                }
                alt={`${user?.displayName}'s profile photo`}
              />
              <h3 className="text-2xl font-bold">{user?.displayName}</h3>
              <p className="border rounded-sm w-20 mx-auto">Member</p>
            </div>
          </div>
          <div className="flex gap-4  w-4/12 justify-center">
            <div className="flex flex-col justify-center items-center">
              {/*  */}

              <h1 className="text-lg font-bold text-center">
                Connected Profiles
              </h1>
              <div className="flex gap-4 text-2xl justify-center  ">
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/facebook.e96143e5.png"
                  alt=""
                />
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/twitter.44ea9c7c.png"
                  alt=""
                />
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/instagram.a89b5e48.png"
                  alt=""
                />
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/youtube.a8224612.png"
                  alt=""
                />
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/discord.87b031fc.png"
                  alt=""
                />
                <img
                  className="w-10 hover:-translate-y-2 hover:animate-pulse  h-10"
                  src="https://asphalt9.assets.gameloft.com/static/_next/static/media/tiktok.cb61d741.png"
                  alt=""
                />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <ProfileContent />
    </div>
  );
};

export default Profile;
