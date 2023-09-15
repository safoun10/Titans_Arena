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
import MyComments from "./MyComments";

const ProfileContent = ({ userInfo, myComments }) => {
	const { user } = useAuth();

	return (
		<div className="w-12/12 flex ">
			<div className="w-4/12  ">
				<div className="m-2 border bg-slate-800  p-2 py-5 rounded-md  ">
					<h1 className="text-2xl font-bold ">Introduction</h1>
					<p>{userInfo?.bio}</p>
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
							<p className="text-grey-100">John Doe</p>
						</div>
						<div className="text-grey-100">2023-09-01</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$50.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Jane Smith</p>
						</div>
						<div className="text-grey-100">2023-09-02</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$75.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">John Doe</p>
						</div>
						<div className="text-grey-100">2023-09-01</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$50.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">John Doe</p>
						</div>
						<div className="text-grey-100">2023-09-01</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$50.00
						</div>
					</div>
					<div className="flex justify-between items-center border-b-2 bg-gray-900  p-3 ">
						<div>
							<p className="text-grey-100">Jane Smith</p>
						</div>
						<div className="text-grey-100">2023-09-02</div>
						<div className="bg-greenAccent-500 p-2 rounded">
							$75.00
						</div>
					</div>
				</div>
			</div>
			<div className="w-8/12 ">
				<div className="grid grid-cols-4 gap-2 rounded-md p-2 text-center">
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center flex-col rounded-md">
						<FaGamepad className="w-10 h-10" />
						<div className="text-white font-semibold text-lg">
							12,361
						</div>
						<div className="text-white text-lg">Won Matches</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center p-10 flex-col rounded-md">
						<FaCartFlatbedSuitcase className="w-10 h-10" />
						<div className="text-white font-semibold text-lg">
							431,225
						</div>
						<div className="text-white text-lg">
							Order Completed
						</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center p-10 flex-col rounded-md">
						<FaPlaystation className="w-10 h-10" />
						<div className="text-white font-semibold text-lg">
							32,441
						</div>
						<div className="text-white text-lg">
							Played Tournarments
						</div>
					</div>
					<div className="bg-primary-400 flex bg-slate-800 border items-center justify-center p-10 flex-col rounded-md">
						<FaShieldHeart className="w-10 h-10" />
						<div className="text-white font-semibold text-lg">
							1,325,134
						</div>
						<div className="text-white text-lg">
							Tournaments Hosted
						</div>
					</div>
				</div>
				<Test2 />
				<MyComments myComments={myComments} />
			</div>
		</div>
	);
};

export default ProfileContent;
