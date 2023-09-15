import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import useAuth from "../../../Hooks/useAuth";

const TournamentForm = () => {
  const { user } = useAuth(); // Replace with your authentication hook

  const [formData, setFormData] = useState({
    tournament_name: "",
    matchStage: "",
    description: "",
    tournamentPicture: "", // Store the uploaded image URL here
    start_date: "",
    matchTime: "",
    location: "",
    organizer_name: user?.name || "", // Set the default value to the user's name
    organizer_image: user?.photoURL || "",
    organizer_email: user?.email || "", // Set the default value to the user's email
    prize_pool: "",
    game_title: "",
    game_developer: "",
    game_platform: "",
    game_genre: "",
    totalTeam: "",
    gamingMoode: "",
  });

  const [imageFile, setImageFile] = useState(null); // Store the selected image file here

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleImageUpload = async () => {
    try {
      if (!imageFile) {
        alert("Please select an image to upload.");
        return;
      }

      // Create a FormData object to send the image file to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      // Make an HTTP POST request to ImgBB to upload the image
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            key: "b5bb56b3a3aafa718da5c96f7784044f", // Replace with your actual ImgBB API key
          },
        }
      );

      if (response.data && response.data.data && response.data.data.url) {
        // Set the uploaded image URL in the form data
        setFormData({ ...formData, tournamentPicture: response.data.data.url });
        alert("Image uploaded successfully.");
      } else {
        alert("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the request body
      const requestBody = JSON.stringify(formData);

      // Send a POST request using the fetch API
      const response = await fetch("http://localhost:5000/tournaments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });

      if (response.ok) {
        alert("Tournament details submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`An error occurred: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the tournament details.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="dark: dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">Tournaments </h3>
                  <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                    Basic Information
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="tournament_name"
                      >
                        Tournament Name:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="tournament_name"
                        name="tournament_name"
                        value={formData.tournament_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="matchStage"
                      >
                        Match Stage:
                      </label>
                      <select
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="matchStage"
                        name="matchStage"
                        value={formData.matchStage}
                        onChange={handleChange}
                      >
                        <option value="online">Online</option>
                        <option value="ofline">Offline</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="description"
                      >
                        Description:
                      </label>
                      <textarea
                        id="description"
                        className="py-2 bg-slate-800 rounded-none"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="start_date"
                      >
                        Date:
                      </label>
                      <input
                        type="date"
                        className="py-2 bg-slate-800 rounded-none"
                        id="start_date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="matchTime"
                      >
                        Match Time:
                      </label>
                      <input
                        type="time"
                        className="py-2 bg-slate-800 rounded-none"
                        id="matchTime"
                        name="matchTime"
                        value={formData.matchTime}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="location"
                      >
                        Location:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="organizer_name"
                      >
                        Host Name:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="organizer_name"
                        name="organizer_name"
                        value={formData.organizer_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="organizer_image"
                      >
                        Host Name:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="organizer_image"
                        name="organizer_image"
                        value={formData.organizer_image}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="organizer_email"
                      >
                        Host Email:
                      </label>
                      <input
                        type="email"
                        className="py-2 bg-slate-800 rounded-none"
                        id="organizer_email"
                        name="organizer_email"
                        value={formData.organizer_email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="prize_pool"
                      >
                        Prize Pool:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="prize_pool"
                        name="prize_pool"
                        value={formData.prize_pool}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="tournamentPicture"
                      >
                        Tournament Picture:
                      </label>
                      <input
                        type="file"
                        className="py-2 bg-slate-800 rounded-none"
                        id="tournamentPicture"
                        name="tournamentPicture"
                        onChange={handleImageChange}
                      />
                      <button
                        type="button"
                        className="btn btn-accent"
                        onClick={handleImageUpload}
                      >
                        Upload Image
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dark: dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">Game Details</h3>
                  <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                    Of This Tournament
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="game_title"
                      >
                        Game Title:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="game_title"
                        name="game_title"
                        value={formData.game_title}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="game_developer"
                      >
                        Game Developer:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="game_developer"
                        name="game_developer"
                        value={formData.game_developer}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="game_platform"
                      >
                        Game Platform:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="game_platform"
                        name="game_platform"
                        value={formData.game_platform}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="game_genre"
                      >
                        Game Genre:
                      </label>
                      <input
                        type="text"
                        className="py-2 bg-slate-800 rounded-none"
                        id="game_genre"
                        name="game_genre"
                        value={formData.game_genre}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dark: dark:text-gray-100">
          <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                  <h3 className="text-3xl font-semibold">Enrollment</h3>
                  <span className="text-sm font-bold tracki uppercase dark:text-gray-400">
                    Details
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="totalTeam"
                      >
                        Total Teams:
                      </label>
                      <input
                        type="number"
                        className="py-2 bg-slate-800 rounded-none"
                        id="totalTeam"
                        name="totalTeam"
                        value={formData.totalTeam}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-control">
                      <label
                        className="text-lg font-semibold my-2 "
                        htmlFor="gamingMoode"
                      >
                        Gaming Mode:
                      </label>
                      <select
                        id="gamingMoode"
                        className="py-2 bg-slate-800 rounded-none"
                        name="gamingMoode"
                        value={formData.gamingMoode}
                        onChange={handleChange}
                      >
                        <option value="single">Single Player</option>
                        <option value="team">Team</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <button
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-violet-400 text-gray-900 focus:ri hover:ri"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TournamentForm;
