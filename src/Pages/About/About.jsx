import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    
    const enrolledTournaments = [
        { id: 1, name: "Tournament 1", date: "10th September 2023" },
        { id: 2, name: "Tournament 2", date: "15th September 2023" },
        { id: 3, name: "Tournament 3", date: "20th September 2023" },
      ];
  const [reservedSlots, setReservedSlots] = useState([]);

  const handleSlotReservation = (slotIndex) => {
    if (reservedSlots.includes(slotIndex)) {
      setReservedSlots(reservedSlots.filter((slot) => slot !== slotIndex));
    } else {
      setReservedSlots([...reservedSlots, slotIndex]);
    }
  };

  const playerSlots = Array.from({ length: 50 }, (_, index) => {
    const isReserved = reservedSlots.includes(index);
    const slotClasses = `bg-${
      isReserved ? "blue" : "gray"
    }-200 p-4 m-2 cursor-pointer`;

    return (
      <div
        key={index}
        className={slotClasses}
        onClick={() => handleSlotReservation(index)}
      >
        Player {index + 1}
        {isReserved && <span className="text-green-500 ml-2">Reserved</span>}
      </div>
    );
  });
  return (
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="text-[#4b4b4b] font-semibold p-2 mt-5 text-sm  tracking-wider text-center uppercase font-featherbold">
            HelloTalk Team
          </p>
          <h1 className="mb-10 md:mx-32 mx-3 sm:mx-32 text-[#61B800] text-center text-4xl font-bold">
            Meet Our Team
          </h1>
          {/* <div className="flex flex-row flex-wrap-reverse justify-center mt-8"> */}
          <div className="md:grid md:grid-cols-3 flex flex-row flex-wrap justify-center mt-8">
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 hover:bg-white hover:text-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400669802938478/HAS-V20.jpg?width=420&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Shaimon</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href=" https://www.facebook.com/al.shaimon"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/al-shaimon"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/al-shaimon/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 "
                src="https://media.discordapp.net/attachments/1063400454056312872/1063405036702539846/322006678_898904951270318_570334744420783429_n.jpg?width=609&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Kasib</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/chowdhury.kasib/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/chykasib"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/chy-kasib-b4b2b5244/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1071491763044372661/Foysal.jpg?width=569&height=572"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Mosharaf</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/foysal1993dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/Mosharaf12"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/mosharaf-hossain-065407183/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400496607543306/FB_IMG_1673604804870.jpg"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Afnan Ferdousi
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/afnanferdousi2006/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.linkedin.com/in/afnanferdousi550/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/afnanferdousi550/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://media.discordapp.net/attachments/1063400454056312872/1063400975076962354/sujoypaul.jpg"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Sujoy Kumar Paul
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/spsujoy07"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/spsujoy007"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/spsujoy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
            <div className="flex flex-col hover:-translate-y-6 duration-500 hover:shadow-2xl hover:bg-white hover:text-gray-800 justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-28 h-28 -mt-12 bg-center bg-cover rounded-full bg-gray-500 object-cover"
                src="https://media.discordapp.net/attachments/1060905971519586324/1068179136721465474/IMG_20221208_200202_351_1.jpg?width=515&height=609"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Md. Asadullah Al Galib
                </p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-5 text-xl border-t-2">
                <a
                  href="https://www.facebook.com/Galib.8/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {""}
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://github.com/Galib6"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaGithub></FaGithub>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/algalib2/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  <FaLinkedin></FaLinkedin>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="rounded-xl py-16 px-5 md:px-0 text-center border-gray-500 transition-all duration-300 hover:border-[#0fcda156] border-2 drop-shadow-lg grid gap-8 md:gap-0 md:grid-cols-3 justify-center text-white divide-y-2 md:divide-y-0 divide-x-0 md:divide-x-2 hover:divide-[#0fcda156] divide-gray-500 group">
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
          <h2 className="text-5xl md:text-7xl font-bold">
            1000 {/* Static number */}
            <span className="group-hover:text-[#0fcda1] duration-300">
              &#43;
            </span>
          </h2>
          <p className="text-lg tracking-wider font-thin">
            Total users in FlexCode.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
          <h2 className="text-5xl md:text-7xl font-bold">
            500 {/* Static number */}
            <span className="group-hover:text-[#0fcda1] duration-300">
              &#43;
            </span>
          </h2>
          <p className="text-lg tracking-wider">Total problems in our site.</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center pt-8 md:pt-0">
          <h2 className="text-5xl md:text-7xl font-bold">
            451 {/* Static number */}
            <span className="group-hover:text-[#0fcda1] duration-300">
              &#43;
            </span>
          </h2>
          <p className="text-lg tracking-wider">
            Completed Problems in this month.
          </p>
        </div>
      </div>

      {/* blogs */}
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-white">
          <img
            className="w-full h-48 object-cover"
            src="https://media.discordapp.net/attachments/1060905971519586324/1068179136721465474/IMG_20221208_200202_351_1.jpg?width=515&height=609"
            alt="Game 1"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Game 1</div>
            <p className="text-gray-300 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              malesuada lacus eu dapibus.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-white">
          <img
            className="w-full h-48 object-cover"
            src="https://media.discordapp.net/attachments/1060905971519586324/1068179136721465474/IMG_20221208_200202_351_1.jpg?width=515&height=609"
            alt="Game 2"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Game 2</div>
            <p className="text-gray-300 text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-white">
          <img
            className="w-full h-48 object-cover"
            src="https://media.discordapp.net/attachments/1060905971519586324/1068179136721465474/IMG_20221208_200202_351_1.jpg?width=515&height=609"
            alt="Game 3"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Game 3</div>
            <p className="text-gray-300 text-base">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">{playerSlots}</div>
      <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">eSports Tournament Join Dashboard</h1>
      <div className="w-full max-w-md bg-gray-200 rounded-lg p-8">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team">
              Team Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="team"
              type="text"
              placeholder="Enter your team name"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Join Tournament
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Enrolled Tournaments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {enrolledTournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="bg-blue-900 rounded-lg p-4 flex flex-col justify-between"
          >
            <h2 className="text-lg font-semibold mb-2">{tournament.name}</h2>
            <p className="text-gray-400">Date: {tournament.date}</p>
            <button className="bg-white text-blue-900 px-4 py-2 mt-4 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
    {/* dashboard */}
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg bg-white shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Unique Dashboard!</h1>
        <p className="text-lg mb-8">Experience a one-of-a-kind dashboard design.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-300">This is an amazing feature.</p>
          </div>
          <div className="bg-blue-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-300">Another awesome feature.</p>
          </div>
          <div className="bg-pink-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-300">Yet another fantastic feature.</p>
          </div>
          <div className="bg-green-900 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Feature 4</h2>
            <p className="text-gray-300">And one more incredible feature.</p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default About;
