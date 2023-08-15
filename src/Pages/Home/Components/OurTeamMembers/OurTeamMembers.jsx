import React, { useEffect, useState } from "react";
import "./OurTeamMembers.css";

const OurTeamMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("teamMember.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div>
      <div className="text-center my-10">
        <h3 className="text-[#68fb9a] font-semibold ">KNOW OUR </h3>
        <h1 className="text-white text-4xl font-bold my-2">TEAM MEMBER</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 mx-auto"
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
      <div className="grid md:grid-cols-4  justify-center  gap-4 grid-cols max-w-7xl  mx-auto  text-white ">
        {members.map((member) => (
          <div className="border-2 rounded-2xl h-96  bg-[#121a23] 
          hover:bg-gradient-to-b from-transparent to-[#68fb9a]
            border-[#68fb9a] flex-col   flex items-center justify-center ">
            {/* <div className="h-16 left-20 team-member-card w-96  -z-1 rotate-45 pt-20"></div> */}
            <img
              className="w-44 z-10 border-2 rounded-full "
              src={member.image}
              alt=""
            />
            <h1 className="font-bold uppercase text-center my-10">
              {member.title}
            </h1>
            <h1 className="text-sm font-semibold">{member.designation}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamMembers;
