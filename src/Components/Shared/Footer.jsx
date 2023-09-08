import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="px-5 py-6 lg:px-24 lg:py-28  bg-gray-950">
				<div className="grid grid-cols lg:grid-cols-6 pb-10">
					<div className="col-span-2">
						<h3 className="text-white font-extrabold text-5xl pb-5">
							<Link to={"/"} className="flex items-center gap-2">
								Titans Arena
							</Link>
						</h3>
						<p className="text-slate-300 font-normal text-justify text-base w-5/6 pb-5">
							A blazing fast, safe and secure site with user
							centric retina perfect design that features
							tournament management, game pre-register and
							multiple amazing features.
						</p>
					</div>

					<section>
						<h1 className="text-white text-xl font-semibold pb-3">
							Explore
						</h1>

						<Link to={"/allgame"}>
							<p className="text-slate-300 font-normal text-base">
								All Games
							</p>
						</Link>
						<Link to={"/blogs"}>
							<p className="text-slate-300 font-normal text-base">
								Blogs
							</p>
						</Link>
						<Link to={"/esports"}>
							<p className="text-slate-300 font-normal text-base">
								eSports
							</p>
						</Link>
						<Link to={"/dashboard/profile"}>
							<p className="text-slate-300 font-normal text-base">
								Dashboard
							</p>
						</Link>
					</section>

					<section>
						<h1 className="text-white text-xl font-semibold pb-3">
							Help
						</h1>
						<p className="text-slate-300 font-normal text-base">
							Terms and conditions
						</p>
						<p className="text-slate-300 font-normal text-base">
							Privacy policy
						</p>
						<p className="text-slate-300 font-normal text-base">
							Cookies
						</p>
					</section>

					<section>
						<h1 className="text-white text-xl font-semibold pb-3">
							Get in touch
						</h1>
						<p className="text-slate-300 font-normal text-base">
							support@titans-arena.web.app
						</p>
						<p className="text-slate-300 font-normal text-base">
							+88 01320-717733
						</p>
						<p className="text-slate-300 font-normal text-base">
							7074 Tejgaon, Dhaka, Bangladesh
						</p>
					</section>
				</div>
				<hr />
				<div className="flex justify-between pt-11">
					<p className="text-slate-400">
						&copy; Tech Titans 2023 | All Rights Reserved
					</p>
					<p className="text-slate-400">
						Powered by{" "}
						<span className="font-bold">Tech Titans</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
