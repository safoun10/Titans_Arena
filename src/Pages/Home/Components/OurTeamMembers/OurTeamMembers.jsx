import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import "./OurTeamMembers.css";
import { useGetTeamMembersQuery } from "../../../../Redux/slice/TeamMemebers";

const OurTeamMembers = () => {
	const [members, setMembers] = useState([]);
	const { data } = useGetTeamMembersQuery();

	useEffect(() => {
		// fetch("teamMember.json")
		//   .then((res) => res.json())
		//   .then((data) => setMembers(data));
		setMembers(data);
	}, [data]);

	return (
		<div className="my-16">
			<Title primaryText="Know Our" secondaryText="Team Member" />
			<div className="grid md:grid-cols-6 justify-center  gap-4 grid-cols-1 mt-14 md:mx-auto mx-6  text-white ">
				{members?.map((member, i) => (
					<div
						key={i}
						className="border-2 rounded-2xl h-64  bg-[#121a23] 
          hover:bg-gradient-to-b from-transparent to-[#68fb9a]
            border-[#68fb9a] flex-col   flex items-center justify-center  "
					>
						<img
							className="w-32 z-10 border-2 rounded-full "
							src={member.image}
							alt=""
						/>
						<h1 className="font-bold uppercase text-center  mt-5">
							{member.title}
						</h1>
						<h1 className="text-sm font-semibold">
							{member.designation}
						</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurTeamMembers;
