import React from "react";
import {
  AiFillAndroid,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineProfile,
} from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import {
  FaCartFlatbedSuitcase,
  FaPlaystation,
  FaShieldHeart,
} from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import Test2 from "../Admin/Test2/Test2";

const ProfileContent = () => {
  const { user } = useAuth();
  return (
    <div className="w-12/12 flex">
      <div className="w-4/12  ">
        <div
          style={{
            background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
            boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(30px)",
            border: "1px solid var(--outline-dark-update-layout, #FFF)",
          }}
          className="m-2 p-2 py-5 rounded-md  bg-slate-700"
        >
          <h1 className="text-2xl font-bold ">Introduction</h1>
          <p className="">
            Hello, I am Mathew Anderson. I love making websites and graphics.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="flex items-center gap-2 font-semibold text-[17px]">
              <AiOutlineProfile className="text-blue-500 " />
              UserId: {user?.uid}
            </p>
            <p className="flex items-center gap-2 font-semibold text-[17px]">
              <AiOutlineMail className="text-blue-500 " />
              Email: {user?.email}
            </p>
            <p className="flex items-center gap-2 font-semibold text-[17px]">
              <AiOutlinePhone className="text-blue-500 " />
              Phone: {user?.phoneNumber ? user.phoneNumber : "null"}
            </p>
            <p className="flex items-center gap-2 font-semibold text-[17px]">
              <MdLocationPin className="text-blue-500 " />
              Country: {user?.phoneNumber ? user.phoneNumber : "null"}{" "}
            </p>
          </div>
        </div>

        <div  style={{
            background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
              boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(30px)",
              border: "1px solid var(--outline-dark-update-layout, #FFF)",
            }} className="grid-cols-4 grid-rows-2 bg-primary-400 overflow-auto">
          <div className="flex justify-between items-center border-b-4 border-primary-500 text-grey-100 p-5">
            <h5 className="text-grey-100 font-semibold">Recent Transactions</h5>
          </div>
          <div className="flex justify-between items-center border-b-4 border-primary-500 p-2 ">
            <div>
              <h5 className="text-greenAccent-500 font-semibold">TX001</h5>
              <p className="text-grey-100">John Doe</p>
            </div>
            <div className="text-grey-100">2023-09-01</div>
            <div className="bg-greenAccent-500 p-2 rounded">$50.00</div>
          </div>
          <div className="flex justify-between items-center border-b-4 border-primary-500 p-2 ">
            <div>
              <h5 className="text-greenAccent-500 font-semibold">TX002</h5>
              <p className="text-grey-100">Jane Smith</p>
            </div>
            <div className="text-grey-100">2023-09-02</div>
            <div className="bg-greenAccent-500 p-2 rounded">$75.00</div>
          </div>
          <div className="flex justify-between items-center border-b-4 border-primary-500 p-2 ">
            <div>
              <h5 className="text-greenAccent-500 font-semibold">TX001</h5>
              <p className="text-grey-100">John Doe</p>
            </div>
            <div className="text-grey-100">2023-09-01</div>
            <div className="bg-greenAccent-500 p-2 rounded">$50.00</div>
          </div>
          <div className="flex justify-between items-center border-b-4 border-primary-500 p-2 ">
            <div>
              <h5 className="text-greenAccent-500 font-semibold">TX002</h5>
              <p className="text-grey-100">Jane Smith</p>
            </div>
            <div className="text-grey-100">2023-09-02</div>
            <div className="bg-greenAccent-500 p-2 rounded">$75.00</div>
          </div>
          {/* Add more static transaction elements as needed */}
        </div>
      </div>
      <div className="w-8/12 ">
        <div className="grid grid-cols-4 gap-2 rounded-md p-2 text-center">
          <div
            style={{
              background:
                "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
                boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(30px)",
                border: "1px solid var(--outline-dark-update-layout, #FFF)",
              }}
              className="bg-primary-400 flex bg-slate-700 items-center justify-center flex-col rounded-md"
              >
            <FaGamepad className="w-10 h-10" />
            <div className="text-white font-semibold text-lg">12,361</div>
            <div className="text-white text-lg">Won Matches</div>
          </div>
          <div
            style={{
              background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
              boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(30px)",
              border: "1px solid var(--outline-dark-update-layout, #FFF)",
            }}
            className="bg-primary-400 flex bg-slate-700 items-center justify-center p-10 flex-col rounded-md"
          >
            <FaCartFlatbedSuitcase className="w-10 h-10" />
            <div className="text-white font-semibold text-lg">431,225</div>
            <div className="text-white text-lg">Order Completed</div>
          </div>
          <div
            style={{
              background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
              boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(30px)",
              border: "1px solid var(--outline-dark-update-layout, #FFF)",
            }}
            className="bg-primary-400 flex bg-slate-700 items-center justify-center p-10 flex-col rounded-md"
            >
            <FaPlaystation className="w-10 h-10" />
            <div className="text-white font-semibold text-lg">32,441</div>
            <div className="text-white text-lg">Played Tournarments</div>
          </div>
          <div
            style={{
              background:
              "var(--layout-dark-landing, linear-gradient(142deg, rgba(27, 51, 81, 0.30) 19.63%, rgba(155, 97, 149, 0.30) 83.01%))",
              boxShadow: "0px 40px 40px 0px rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(30px)",
              border: "1px solid var(--outline-dark-update-layout, #FFF)",
            }}
            className="bg-primary-400 flex bg-slate-700 items-center justify-center p-10 flex-col rounded-md"
            >
            <FaShieldHeart className="w-10 h-10" />
            <div className="text-white font-semibold text-lg">1,325,134</div>
            <div className="text-white text-lg">Tournaments Hosted</div>
          </div>
        </div>
<Test2/>
      </div>
    </div>
  );
};

export default ProfileContent;
