import { Link, useParams } from "react-router-dom";
import BlogBanner from "../BlogBanner";
import {
	FaCalendarDays,
	FaFacebookF,
	FaComments,
	FaLinkedinIn,
	FaTwitter,
	FaArrowRight,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import {
	useGetBlogByIdQuery,
	useGetBlogsQuery,
} from "../../../Redux/api/blogApi";

const SingleBlog = () => {
	const { id } = useParams();

	const { data: blogs } = useGetBlogsQuery();
	const { data: blog, isLoading } = useGetBlogByIdQuery(id);

	return (
		<div>
			<Helmet>
				<title>Titans Arena || Blog</title>
			</Helmet>
			<BlogBanner title="Single Blog" />
			<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-4 lg:px-8 pt-24 pb-16 bg-[#0f161b]">
				<div className="col-span-4">
					<div className="bg-[#182029] mb-10">
						<img
							className="w-full"
							src={blog?.featured_image}
							alt="blog-image"
						/>
						<div className="py-3 px-4 lg:py-6 lg:px-11">
							<div className="text-white flex gap-3 lg:gap-6">
								<p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
									By{" "}
									<span className="duration-200 hover:text-[#45f882]">
										{blog?.author}
									</span>
								</p>
								<p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
									<FaCalendarDays className="text-[#45f882]" />{" "}
									<span>{blog?.date}</span>
								</p>
								<p className="flex gap-3 items-center font-semibold text-xs lg:text-lg">
									<FaComments className="text-[#45f882] text-lg" />{" "}
									Comments
								</p>
							</div>
							<div className="text-white">
								<h1 className="text-2xl lg:text-4xl py-5 font-bold duration-200 hover:text-[#45f882]">
									{blog?.title}
								</h1>
								<p className="text-slate-400 text-base lg:text-xl font-semibold pb-3">
									{blog?.content}
								</p>
							</div>

							<div className="text-slate-400 py-4 text-sm lg:text-lg flex justify-between font-semibold items-center">
								<div className="flex items-center">
									<Link
										className="hover:text-[#45f882] group flex items-center"
										to={`/`}
									>
										Back to Home
										<span className="inline-block pl-2 text-[#45f882] rotate-arrow group-hover:rotate-0">
											<FaArrowRight className="rotate-arrow -rotate-45" />
										</span>
									</Link>
								</div>

								<div className="flex items-center gap-3">
									<p className="mr-2">SHARE :</p>
									<Link to={blog?.twitter}>
										{" "}
										<FaTwitter className="text-white hover:text-[#45f882] transition-colors" />
									</Link>
									<Link to={blog?.facebook}>
										{" "}
										<FaFacebookF className="text-white hover:text-[#45f882] transition-colors" />
									</Link>
									<Link to={blog?.linked_in}>
										<FaLinkedinIn className="text-white hover:text-[#45f882] transition-colors" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-2">
					<form action="" className="relative flex items-center">
						<input
							type="text"
							placeholder="SEARCH HERE..."
							className="input bg-transparent text-white placeholder:text-lg placeholder:font-semibold input-bordered input-success w-full max-w-lg "
						/>
						<button
							type="submit"
							className="absolute right-4 text-gray-500 hover:text-[#45f882] duration-200"
						>
							<FaSearch />
						</button>
					</form>

					<div className="text-white py-6">
						<h1 className="font-bold text-2xl pb-6">
							RECENT POSTS
						</h1>
						{blogs?.slice(2, 6).map((blog, i) => (
							<Link to={`/blog/${blog?._id}`} key={i}>
								<div className="flex gap-4 pb-4">
									<img
										className="w-[160px] rounded-md"
										src={blog?.featured_image}
										alt=""
									/>
									<div>
										<h2 className="lg:pr-7 text-lg font-semibold hover:text-[#45f882] transition-colors">
											{blog?.title.slice(0, 54)}...
										</h2>
										<p className="text-lg font-semibold text-slate-500">
											{blog?.date}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>

					<div className="text-white ">
						<h1 className="text-2xl font-bold uppercase pb-3 text-white">
							NEWSLETTER
						</h1>
						<p className="text-xl font-semibold pb-3 text-slate-400">
							{" "}
							Scripting the Epic Tale of Gaming News!
						</p>
						<form className="flex items-center relative">
							<input
								type="text"
								placeholder="ENTER YOUR EMAIL"
								className="w-full max-w-lg  
             font-semibold placeholder-[#45f882] pb-3 bg-transparent focus:outline-none border-b-2 border-gray-800
             "
							/>
							<button className="absolute right-2" type="submit">
								<FaArrowRight className="rotate-arrow -rotate-45 text-[#45f882]" />
							</button>
						</form>
					</div>
					<div className="py-6">
						<h1 className="text-2xl font-bold uppercase pb-6 text-white">
							TAG CLOUD
						</h1>
						<div className="flex flex-wrap gap-4">
							{blog?.length == 0 ? (
								<>
									<Link className="styled-link">
										# E-SPORTS
									</Link>
									<Link className="styled-link">
										# FANTSY
									</Link>
									<Link className="styled-link">
										# TOURNAMENTS
									</Link>
									<Link className="styled-link"># GAME</Link>
									<Link className="styled-link">
										# MATCHES
									</Link>
									<Link className="styled-link">
										# STREAMERS
									</Link>
								</>
							) : (
								blog?.tags.map((tag, i) => (
									<Link className="styled-link">
										<span>#</span>
										{tag}
									</Link>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
