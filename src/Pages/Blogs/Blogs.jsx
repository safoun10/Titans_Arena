import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Blogs.css";
import BlogElement from "./BlogElement";
import BlogBanner from "./BlogBanner";
import Pagination from "../AllGames/Pagination";
import { Helmet } from "react-helmet-async";
import {
  useAddNewsLetterMutation,
  useGetBlogSearchQuery,
} from "../../Redux/api/blogApi";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Blogs = () => {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const [addNewsLetter, { data, isSuccess }] = useAddNewsLetterMutation();

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 3;

  const { data: blogs, isLoading } = useGetBlogSearchQuery(search);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    searchRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleNersletter = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const newEmail = {
      userEmail: user?.email,
      email: email,
    };
    addNewsLetter(newEmail);
    console.log(newEmail);
  };

  if (isSuccess === true) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your email is added to the newsletter.",
      showConfirmButton: false,
      timer: 1500,
      color: "#FFFFFF",
      background:
        " linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",

      confirmButtonColor: "cool",
    });
  }

  return (
		<div>
			<Helmet>
				<title>Titans Arena || Blogs</title>
			</Helmet>
			{/* blog page banner start */}
			<BlogBanner title="Blogs List" />
			{/* blog page banner end */}

			<div className="grid grid-cols-1 lg:grid-cols-6 gap-6 px-8 pt-24 pb-16 bg-[#0f161b]">
				{/* Blogs page left side start*/}
				<div className="col-span-4">
					{/* single blog start*/}
					{blogs
						?.slice(
							(currentPage - 1) * gamesPerPage,
							currentPage * gamesPerPage
						)
						?.map((blog, i) => (
							<BlogElement key={i} blog={blog} />
						))}
					{/* single blog end*/}
					{blogs?.length >= 3 ? (
						<Pagination
							totalGames={blogs?.length}
							gamesPerPage={gamesPerPage}
							currentPage={currentPage}
							paginate={setCurrentPage}
						/>
					) : (
						""
					)}
				</div>
				{/* Blogs page left side end*/}
				{/* Blogs page right side start */}
				<div className="col-span-2">
					<div className="form-control w-full max-w-lg">
						<div className="input-group">
							<input
								type="text"
								ref={searchRef}
								placeholder="Search…"
								onKeyDown={handleKeyPress}
								className="input text-white font-bold input-bordered border-[#45f882] bg-transparent w-full max-w-lg"
							/>
							<button
								onClick={handleSearch}
								className="border px-2 border-[#45f882] bg-transparent text-gray-500 hover:text-[#45f882] duration-200"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
					{/* Relative part Start*/}
					<div className="text-white py-6">
						<h1 className="font-bold text-2xl pb-6 uppercase">
							Relative POSTS
						</h1>
						{blogs?.slice(5, 9).map((blog, i) => (
							<Link to={`/blog/${blog._id}`} key={blog._id}>
								<div className="flex gap-4 pb-4">
									<img
										className="w-[128px] rounded-md"
										src={blog.featured_image}
										alt=""
									/>
									<div className="">
										<h2 className="lg:pr-7 text-lg font-semibold hover:text-[#45f882] transition-colors">
											{blog.title}
										</h2>
										<p className="text-lg font-semibold text-slate-500">
											{blog.date}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
					{/* RECENT POSTS part end*/}
					{/* NEWS LETTER part start*/}
					<div className="text-white ">
						<h1 className="text-2xl font-bold uppercase pb-3 text-white">
							NEWSLETTER
						</h1>
						<p className="text-xl font-semibold pb-3 text-slate-400">
							{" "}
							Scripting the Epic Tale of Gaming News!
						</p>
						<form
							onSubmit={handleNersletter}
							className="flex items-center relative"
						>
							<input
								type="email"
								name="email"
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
					{/* NEWS LETTER part end*/}
					{/* TAG CLOUD */}
					<div className="py-6">
						<h1 className="text-2xl font-bold uppercase pb-6 text-white">
							CLOUD TAG
						</h1>
						<div className="flex flex-wrap gap-4">
							<Link className="styled-link"># E-SPORTS</Link>
							<Link className="styled-link"># FANTSY</Link>
							<Link className="styled-link"># TOURNAMENTS</Link>
							<Link className="styled-link"># GAME</Link>
							<Link className="styled-link"># MATCHES</Link>
							<Link className="styled-link"># STREAMERS</Link>
						</div>
					</div>
				</div>
				{/* Blogs page right side start */}
			</div>
		</div>
  );
};

export default Blogs;
