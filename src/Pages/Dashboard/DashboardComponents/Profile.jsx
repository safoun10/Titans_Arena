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
