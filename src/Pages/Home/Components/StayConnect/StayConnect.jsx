import { useEffect, useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import { useGetSocialLinksQuery } from "../../../../Redux/slice/SocialLinks";

const StayConnect = () => {
	const [social, setSocial] = useState([]);
	const { data } = useGetSocialLinksQuery();

	useEffect(() => {
		setSocial(data);
	}, [data]);

	return (
		<div className="mt-20">
			<Title
				primaryText="CONNECT WITH US"
				secondaryText="STAY CONNECTED"
			/>
			<div className="pb-20 mx-5 ">
				<div className="grid md:grid-cols-6 gap-5 grid-cols-2   ">
					{social?.map((link, i) => (
						<div
							key={i}
							className="text-white 
            "
						>
							<div
								className="border-2 lg:w-44 h-44  flex flex-col 
              bg-[#121a23]
              justify-center items-center border-[#68fb9a]"
							>
								<a href={link.link}>
									<img
										className="h-20 w-20"
										src={link.image}
										alt=""
									/>
									<h2 className="text-2xl text-[#68fb9a] text-bold">
										{link.title}
									</h2>
								</a>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="65"
								height="5"
								fill="#68fb9a"
								viewBox="0 0 65 5"
								fillRule="evenodd"
							>
								<path
									d="M968,5630h65l-4,5H972Z"
									transform="translate(-968 -5630)"
								></path>
							</svg>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default StayConnect;
