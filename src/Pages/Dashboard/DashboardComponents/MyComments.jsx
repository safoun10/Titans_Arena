import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import MySingleComment from "./MySingleComment";

const MyComments = () => {
	const { user } = useAuth();
	const [myComments, setMyComments] = useState([]);
	const url = `https://titans-arena-server.vercel.app/myComments/${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setMyComments(data);
			});
	}, [user?.email]);
	console.log(myComments);
	return (
		<div>
			<section className=" bg-slate-800 border py-8 lg:py-16 antialiased">
				<div className="mx-auto px-4">
					<div className="flex justify-between items-center mb-6">
						<h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
							My Comments ({myComments.length})
						</h2>
					</div>

					{myComments.map((comment, index) => (
						<MySingleComment
							key={index}
							name={comment.user_name}
							img={comment.user_img}
							content={comment.comment_text}
							date={comment.Date}
							// likes={comment.likes}
							// replies={comment.replies}
						/>
					))}
				</div>
			</section>
			;
		</div>
	);
};

export default MyComments;
