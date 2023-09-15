import { comment } from "postcss";
import React, { useEffect, useState } from "react";
import Title from "../../../../../Components/Shared/AnimatedTitle/Titile";
import useAuth from "../../../../../Hooks/useAuth";
import MyComments from "../../../DashboardComponents/MyComments";

const CommentAndReviewManage = () => {
	const { user } = useAuth();
	const [userInfo, SetUserInfo] = useState();
	const [myComments, setMyComments] = useState([]);
	useEffect(() => {
		fetch(`https://titans-arena-server.vercel.app/userInfo/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				SetUserInfo(data.userInfo);
			})
			.catch((error) => {
				console.error("Error fetching user role:", error);
			});
	}, [user?.email]);
	const url = `https://titans-arena-server.vercel.app/myComments/${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setMyComments(data);
			});
	}, [user?.email]);
	return (
		<div>
			<Title
				primaryText="Manage Your"
				secondaryText="Comments ANd Reviews"
			/>
			<div className="flex">
				<div className="w-1/3">
					<div>
						<div className="text-white  bg-slate-800">
							<div className="stat">
								<div>Total Comments In Game</div>
								<div className="stat-value text-3xl">
									{myComments.length}
								</div>
								<div>Sep 1st - Oct 1st</div>
							</div>

							<div className="stat">
								<div>Total Reply</div>
								<div className="stat-value text-3xl">
									{myComments.length}
								</div>
								<div>↗︎ 400 (22%)</div>
							</div>

							<div className="stat">
								<div>Total Reviews</div>
								<div className="stat-value text-3xl">1,200</div>
								<div>↘︎ 90 (14%)</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/3">
					<div className="overflow-y-scroll h-screen">
						<MyComments
							myComments={myComments}
							userInfo={userInfo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommentAndReviewManage;
