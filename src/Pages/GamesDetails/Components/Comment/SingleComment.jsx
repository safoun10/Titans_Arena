import { useState } from "react";

const SingleComment = ({ name, content, img, date }) => {
	const [isLiked, setIsLiked] = useState(false);
	const [showReplies, setShowReplies] = useState(false);

	const toggleLike = () => {
		setIsLiked(!isLiked);
	};

	const toggleReplies = () => {
		setShowReplies(!showReplies);
	};

	return (
		<div className="p-6 ml-10 lg:w-4/6 lg:justify-between">
			<div className="flex">
				<div className="flex items-center gap-4">
					<img
						className="w-[6.5rem] z-10 border-2 rounded-full "
						src={img}
						alt=""
					/>
					<div className="flex flex-col">
						<span className="font-bold text-xl">{name}</span>
						<span className="text-sm">{date}</span>
						<span className="text-lg font-semibold">{content}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleComment;
