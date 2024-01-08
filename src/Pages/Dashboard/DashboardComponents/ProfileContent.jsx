import React from "react";
import {
	AiFillAndroid,
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineProfile,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { GiCampingTent, GiBullets } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import { TbBrandSpeedtest } from "react-icons/tb";
import Test2 from "../Members/CalenderEvents/CalenderEvents";
import MyComments from "./MyComments";
import { PiGameControllerFill } from "react-icons/pi";

const ProfileContent = ({ userInfo, myComments }) => {
	const { user } = useAuth();

	return (
		<div className="md:flex">
			<div className="md:w-4/12  ">
				<div className="m-2 border bg-slate-800  p-2 py-5 rounded-md  ">
					<h1 className="text-2xl font-bold ">Introduction</h1>
					<p className="">{userInfo?.bio}</p>
					<div className="mt-4 flex flex-col gap-2">
						<p className="flex  py-3 px-3 bg-gray-900 rounded-md items-center gap-2 text-[17px]">
							<AiOutlineProfile className="text-blue-500 " />
							UserId: {userInfo?._id}
						</p>
						<p className="flex  py-3 px-3 bg-gray-900 rounded-md items-center gap-2 text-[17px]">
							<AiOutlineProfile className="text-blue-500 " />
							UserName: {userInfo?.userName}
						</p>
						<p className="flex  py-3 px-3 bg-gray-900 rounded-md items-center gap-2 text-[17px]">
							<AiOutlineMail className="text-blue-500 " />
							Email: {user?.email}
						</p>
						<p className="flex  py-3 px-3 bg-gray-900 rounded-md items-center gap-2 text-[17px]">
							<AiOutlinePhone className="text-blue-500 " />
							Phone: {userInfo?.phoneNumber || ""}
						</p>
						<p className="flex  py-3 px-3 bg-gray-900 rounded-md items-center gap-2 text-[17px]">
							<MdLocationPin className="text-blue-500 " />
							Country: {userInfo?.country}{" "}
						</p>
					</div>
				</div>

				<div className="grid-cols-4 m-2 rounded-md p-2 grid-rows-2 bg-slate-800 border overflow-auto">
					<div className="flex justify-between items-center border-b-2 border-primary-500 text-grey-100 p-2 py-3">
						<h5 className="text-2xl font-semibold">Recent Match</h5>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Ishtiaque Ahmed </p>
						</div>
						<div className="text-grey-100">2023-09-01</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$50.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Faisal Ahmed</p>
						</div>
						<div className="text-grey-100">2023-09-02</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$75.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Shaurav Chandra</p>
						</div>
						<div className="text-grey-100">2023-09-01</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$50.00
						</div>
					</div>

					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Abdullah Al Habib</p>
						</div>
						<div className="text-grey-100">2023-09-02</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$75.00
						</div>
					</div>
					{/* Add more static transaction elements as needed */}
				</div>
			</div>
			<div className="md:w-8/12 ">
				<div className="grid md:grid-cols-4 grid-cols-2  gap-2 rounded-md p-2 text-center">
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center py-12 flex-col rounded-md">
						<PiGameControllerFill className="w-10 h-10" />
						<div className="text-white text-xl font-bold pt-2">
							Epic Gamer
						</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center py-12 flex-col rounded-md">
						<GiCampingTent className="w-10 h-10" />
						<div className="text-white text-xl font-bold pt-2">
							War Survivor
						</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center py-12 flex-col rounded-md">
						<TbBrandSpeedtest className="w-10 h-10" />
						<div className="text-white text-xl font-bold pt-2">
							Speed Demon
						</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center py-12 flex-col rounded-md">
						<GiBullets className="w-10 h-10" />
						<div className="text-white text-xl font-bold pt-2">
							Bullet Fury
						</div>
					</div>
      </div>
				<div className="md:block hidden">
					<Test2 />
				</div>
			</div>
		</div>
	);
};

export default ProfileContent;
