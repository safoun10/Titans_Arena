import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Provider/AuthProvider";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
	const { createUser, user, updateUserData, updateUserProfile } =
		useContext(AuthContext);

	const [error, setErr] = useState("");
	const [verify, SetVerify] = useState(true);

	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const onSubmit = (data) => {
		const { password, confirmPassword, ...rest } = data;

		if (password !== confirmPassword) {
			setErr("Passwords do not match");
		} else {
			createUser(data.email, data.password)
				.then(() => {
					updateUserProfile(data.name, data.photoUrl)
						.then(() => {
							setErr("");

							const saveUser = {
								name: data.name,
								email: data.email,
								photoURL: data.photoUrl,
							};

							fetch(
								"https://titans-arena-server.vercel.app/users",
								{
									method: "POST",
									headers: {
										"Content-Type": "application/json",
									},
									body: JSON.stringify(saveUser),
								}
							)
								.then((res) => res.json())
								.then((data) => {
									if (data.insertedId) {
										Swal.fire({
											title: "User Registered Successfully",
											icon: "success",
											timer: 2000,
										}).then(() => {
											navigate("/");
										});
									}
								})
								.catch((error) => console.log(error));
						})
						.catch((error) => console.log(error));
				})
				.catch((error) => {
					setErr(error.message);
					Swal.fire({
						title: "Error",
						text: error.message,
						icon: "error",
					});
				});
		}
	};

	const onChange = (value) => {
		console.log("Captcha Value", value);
		SetVerify(true);
	};

	return (
		<div>
			<div>
				<div className="hero min-h-screen bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] py-20">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
							<h1 className="text-5xl mt-5 text-center font-bold text-green-500 mb-5 font-mono">
								Register To Titans Arena
							</h1>

							<div className="flex  flex-col rounded-md justify-center items-center border border-green-400 lg:p-4 -mx-1 lg:mx-0 ">
								<form
									onSubmit={handleSubmit(onSubmit)}
									className=" shadow-md rounded px-8 pt-6 pb-8 w-full"
								>
									<div className="mb-4">
										<label
											className="block text-green-500  text-xl font-bold mb-2"
											htmlFor="name"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											{...register("name", {
												required: true,
											})}
											className="p-3 my-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
										/>
										{errors.name && (
											<p className="text-red-500 text-xs italic">
												Name is required.
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-green-500  text-xl font-bold mb-2"
											htmlFor="email"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											{...register("email", {
												required: true,
											})}
											className="p-3 my-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
										/>
										{errors.email && (
											<p className="text-red-500 text-xs italic">
												Email is required.
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-green-500  text-xl font-bold mb-2"
											htmlFor="password"
										>
											Password
										</label>
										<input
											type="password"
											id="password"
											{...register("password", {
												required: true,
											})}
											className="p-3 my-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
										/>
										{errors.password && (
											<p className="text-red-500 text-xs italic">
												Password is required.
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-green-500  text-xl font-bold mb-2"
											htmlFor="confirmPassword"
										>
											Confirm Password
										</label>
										<input
											type="password"
											id="confirmPassword"
											{...register("confirmPassword", {
												required: true,
											})}
											className="p-3 my-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
										/>
										{errors.confirmPassword && (
											<p className="text-red-500 text-xs italic">
												Confirm Password is required.
											</p>
										)}
									</div>

									<div className="mb-4">
										<label
											className="block text-green-500  text-xl font-bold mb-2"
											htmlFor="photoUrl"
										>
											Photo URL
										</label>
										<input
											type="text"
											id="photoUrl"
											{...register("photoUrl")}
											className="p-3 my-5 outline-none bg-[#222222] hover:shadow-[#0b9817]  shadow-inner text-white  w-full rounded-md"
										/>
									</div>
									<div>
										<ReCAPTCHA
											sitekey="6LcnffYnAAAAAEe1BdERt1psjf-PTK-R7IsS3etm"
											onChange={onChange}
										/>
										,
									</div>

									<div className="flex items-center justify-between">
										<button
											type="submit"
											disabled={!verify}
											className={`${
												!verify
													? "bg-gray-500"
													: "custom-button hover:bg-green-500 py-2 px-5"
											} border w-full rounded py-2 px-5 border-none my-2`}
											style={{
												"--path":
													"0px 0px, calc(100% - 14px) 0, 130% 100%, calc(100% - 20px) 100%, 14px 100%, 0px calc(100% - 14px)",
												fontFamily: "resobot-bold",
												WebkitClipPath:
													"polygon(var(--path))",
												clipPath:
													"polygon(var(--path))",
											}}
										>
											Register
										</button>
									</div>
								</form>

								<div>
									<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
										<p className="mx-4 mb-0 text-center text-green-500 font-semibold ">
											Or
										</p>
									</div>
									<div className="ml-5">
										<SocialLogin></SocialLogin>

										<p className="mt-4 text-center text-green-500 flex items-center gap-3 mb-3">
											Have an Account Go To
											<Link
												className="text-indigo-600 "
												to="/login"
											>
												Login{" "}
											</Link>{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center lg:text-left">
							<Player
								className=" rounded-lg  sm:w-[500px] sm:h-[500px]"
								autoplay
								loop
								src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"
							></Player>
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Register;
