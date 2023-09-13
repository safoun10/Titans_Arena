 import React, { useEffect, useState } from "react";
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
  const [userInfo, SetUserInfo] = useState()

  // console.log(user?.email)

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/userInfo/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.userAllInfo);
          SetUserInfo(data.userInfo.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
    }
  }, [user?.email]);
  
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
              <p className="border rounded-sm w-20 mx-auto uppercase">{userInfo || "member"}</p>
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
      <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div className="flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />
                            <span>Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Position</span>

                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.3"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Number of solve</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          View Profile
                        </th>


                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Arthur Melo
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @authurmelo
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              4
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          490
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          authurmelo@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Amelia. Anderson
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @ameliaanderson
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              5
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          450
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          ameliaanderson@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  junior REIS
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @junior
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              6
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          420
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          junior@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>
                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Olivia Wathan
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @oliviawathan
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              7
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          400
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          oliviawathan@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>

                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  Mia
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  @mia
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-sm font-normal text-emerald-500">
                              8
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          380
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          mia@example.com
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <button>

                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                Profile
                              </p>
                            </button>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Profile;
