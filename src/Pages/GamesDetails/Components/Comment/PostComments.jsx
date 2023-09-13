import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PostComments = ({ id }) => {
	// const [comments, setComments] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useAuth();
	const navigate = useNavigate();

	//   const handleCommentChange = (e) => {
	//     setNewComment(e.target.value);
	//   };

	const handleSubmitComment = (e) => {
		e.preventDefault();
		const form = e.target;
		const message = form.message.value;
		const currentDate = new Date();
		const comments = {
			game_id: id,
			user_email: user?.email,
			user_name: user?.displayName,
			user_img: user?.photoURL,
			comment_text: message,
			Date: currentDate.toISOString().split("T")[0],
		};
		console.log(comments);

		const url = "https://titans-arena-server.vercel.app/comments";
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(comments),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Comments posted Successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
					form.reset();
				}
			});

		setIsModalOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const validate = () => {
		if (!user) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
			navigate("/login");
		}
	};

	return (
		<div className="mt-16 flex justify-center flex-col items-center">
			<h2 className="text-4xl font-bold mb-4">Comments</h2>
			<button className="px-8 text-white w-[75%] flex items-center gap-3 py-7 w- mt-4 rounded-lg">
				<div className="avatar online">
					<div className="w-10 rounded-full">
						<img
							className=""
							src={user?.photoURL}
							alt="User Avatar"
						/>
					</div>
				</div>
				<div
					onClick={openModal}
					className=" py-5 cursor-pointer px-4 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-full text-left"
				>
					Type your comment
				</div>
			</button>

			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center z-50">
					<div className="absolute inset-0 bg-black opacity-50"></div>
					<div className="z-50  p-6 rounded-lg shadow-lg w-96">
						<h2 className="text-2xl font-bold mb-4 text-green-700">
							Add a Comment
						</h2>
						<form onSubmit={handleSubmitComment}>
							<div className="mb-4 border  rounded-tl-3xl border-green-500 rounded-br-3xl px-4 py-8 ">
								<textarea
									name="message"
									id=""
									placeholder="Message"
									className="w-full  p-5 my-5 text-white font-bold outline-none hover:shadow-[#0b9817] shadow-inner h-[150px] resize-none bg-[#222222] rounded-md"
								/>
							</div>
							<div className="text-right">
								<button
									type="button"
									onClick={closeModal}
									//   className="text-gray-500 hover:text-gray-700 mr-2"
									className=" px-5 py-2 hover:text-white mr-5 bg-gray-700 hover:bg-gray-500"
									style={{
										"--path":
											"0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",
										fontFamily: "resobot-bold",
										WebkitClipPath: "polygon(var(--path))",
										clipPath: "polygon(var(--path))",
										textTransform: "uppercase", // Add text-transform property
										WebkitTransition:
											"all 0.3s ease-in-out", // Add -webkit-transition property
										MozTransition: "all 0.3s ease-in-out", // Add -moz-transition property
										MsTransition: "all 0.3s ease-in-out", // Add -ms-transition property
										OTransition: "all 0.3s ease-in-out", // Add -o-transition property
										transition: "all 0.3s ease-in-out", // Add standard transition property
									}}
								>
									Cancel
								</button>
								<button
									type="submit"
									onClick={() => validate()}
									//   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
									className="custom-button px-5 py-2 text-white hover:bg-green-500"
								>
									Post
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default PostComments;
