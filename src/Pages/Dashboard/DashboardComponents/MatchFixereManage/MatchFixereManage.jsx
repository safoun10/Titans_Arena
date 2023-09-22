import React, { useState } from "react";
import axios from "axios";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";

const initialFormData = {
  tournamentName: "",
  tournamentPicture: "",
  matchStage: "",
  team1: {
    name: "",
    players: ["", "", "", ""],
    country: "",
    team1Logo: "",
    wins: 0,
    trophies: 0,
    ranking: 0,
  },
  team2: {
    name: "",
    players: ["", "", "", ""],
    country: "",
    team2Logo: "",
    wins: 0,
    trophies: 0,
    ranking: 0,
  },
  matchDate: "",
  matchTime: "",
  matchLocation: "",
  matchDescription: "",
  result: {
    winner: "",
    score: "",
  },
  views: "",
  teamPlayer: "",
  gamingMode: "",
  streamURL: "",
  matches: "upcoming",
};

const MatchFixereManage = () => {
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlayerNameChange = (team, index, playerName) => {
    const updatedFormData = { ...formData };
    updatedFormData[team].players[index] = playerName;
    setFormData(updatedFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://titans-arena-server.vercel.app/espMatchFixered",
        formData
      );
      console.log("Tournament created:", response.data);

      // Optionally, reset the form after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error creating tournament:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Title primaryText="Create Result OF" secondaryText="Tournament" />

      <form onSubmit={handleSubmit}>
        {/* Tournament Name */}
        <div className="mb-4">
          <label
            htmlFor="tournamentName"
            className="block text-white  font-bold mb-2"
          >
            Tournament Name
          </label>
          <input
            type="text"
            id="tournamentName"
            name="tournamentName"
            value={formData.tournamentName}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Tournament Picture */}
        <div className="mb-4">
          <label
            htmlFor="tournamentPicture"
            className="block text-white  font-bold mb-2"
          >
            Tournament Picture URL
          </label>
          <input
            type="text"
            id="tournamentPicture"
            name="tournamentPicture"
            value={formData.tournamentPicture}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Match Stage */}
        <div className="mb-4">
          <label
            htmlFor="matchStage"
            className="block text-white  font-bold mb-2"
          >
            Match Stage
          </label>
          <input
            type="text"
            id="matchStage"
            name="matchStage"
            value={formData.matchStage}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Team 1 Details */}
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <h3 className="text-lg font-semibold mb-2">Team 1 Details</h3>
            <label
              htmlFor="team1Name"
              className="block text-white  font-bold mb-2"
            >
              Team 1 Name
            </label>
            <input
              type="text"
              id="team1Name"
              name="team1.name"
              // value={formData.team1.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 mb-2"
            />

            <div className="mb-4">
              <label
                htmlFor="team1Logo"
                className="block text-white font-bold mb-2"
              >
                Team 1 Logo URL
              </label>
              <input
                type="text"
                id="team1Logo"
                name="team1.team1Logo"
                // value={formData.team1.team1Logo}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-white  font-bold">
                Player Names
              </label>
              {formData.team1.players.map((playerName, index) => (
                <input
                  key={index}
                  type="text"
                  name={`team1.players[${index}]`}
                  value={playerName}
                  onChange={(e) =>
                    handlePlayerNameChange("team1", index, e.target.value)
                  }
                  placeholder={`Player ${index + 1}`}
                  className="w-full px-3 py-2 bg-slate-800 mb-2"
                />
              ))}
            </div>
          </div>

          {/* Team 2 Details */}
          <div className="w-1/2 pl-2">
            <h3 className="text-lg font-semibold mb-2">Team 2 Details</h3>
            <label
              htmlFor="team2Name"
              className="block text-white  font-bold mb-2"
            >
              Team 2 Name
            </label>
            <input
              type="text"
              id="team2Name"
              name="team2.name"
              // value={formData.team2.name}
              onChange={handleChange}
              className="w-full text-white px-3 py-2 bg-slate-800 mb-2"
              required
            />
            <div className="mb-4">
              <label
                htmlFor="team2Logo"
                className="block text-white font-bold mb-2"
              >
                Team 2 Logo URL
              </label>
              <input
                type="text"
                id="team2Logo"
                name="team2.team2Logo"
                // value={formData.team2.team2Logo}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-white  font-bold">
                Player Names
              </label>
              {formData.team2.players.map((playerName, index) => (
                <input
                  key={index}
                  type="text"
                  name={`team2.players[${index}]`}
                  value={playerName}
                  onChange={(e) =>
                    handlePlayerNameChange("team2", index, e.target.value)
                  }
                  placeholder={`Player ${index + 1}`}
                  className="w-full px-3 py-2 bg-slate-800 mb-2"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Continue with the rest of the form fields (match date, match time, etc.) */}

        {/* Match Date */}
        <div className="mb-4">
          <label
            htmlFor="matchDate"
            className="block text-white  font-bold mb-2"
          >
            Match Date
          </label>
          <input
            type="date"
            id="matchDate"
            name="matchDate"
            value={formData.matchDate}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Match Time */}
        <div className="mb-4">
          <label
            htmlFor="matchTime"
            className="block text-white  font-bold mb-2"
          >
            Match Time
          </label>
          <input
            type="time"
            id="matchTime"
            name="matchTime"
            value={formData.matchTime}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Match Location */}
        <div className="mb-4">
          <label
            htmlFor="matchLocation"
            className="block text-white  font-bold mb-2"
          >
            Match Location
          </label>
          <input
            type="text"
            id="matchLocation"
            name="matchLocation"
            value={formData.matchLocation}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Match Description */}
        <div className="mb-4">
          <label
            htmlFor="matchDescription"
            className="block text-white  font-bold mb-2"
          >
            Match Description
          </label>
          <textarea
            id="matchDescription"
            name="matchDescription"
            value={formData.matchDescription}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2  bg-slate-800 "
            required
          />
        </div>

        {/* Result */}
        <div className="flex ">
          <div className="w-full mx-auto">
            <div className="mb-4">
              <label
                htmlFor="resultWinner"
                className="block text-white  font-bold mb-2"
              >
                Result Winner
              </label>
              <input
                type="text"
                id="resultWinner"
                name="result.winner"
                // value={formData.result.winner}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>

            {/* Result Score */}
            <div className="mb-4">
              <label
                htmlFor="resultScore"
                className="block text-white  font-bold mb-2"
              >
                Result Score
              </label>
              <input
                type="text"
                id="resultScore"
                name="result.score"
                // value={formData.result.score}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="views"
                className="block text-white  font-bold mb-2"
              >
                Views
              </label>
              <input
                type="text"
                id="views"
                name="views"
                value={formData.views}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>
          </div>
          <div className="w-full mx-auto  pl-4">
            {/* Team Player */}
            <div className="mb-4">
              <label
                htmlFor="teamPlayer"
                className="block text-white  font-bold mb-2"
              >
                Team Player
              </label>
              <input
                type="text"
                id="teamPlayer"
                name="teamPlayer"
                value={formData.teamPlayer}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>

            {/* Gaming Mode */}
            <div className="mb-4">
              <label
                htmlFor="gamingMode"
                className="block text-white  font-bold mb-2"
              >
                Gaming Mode
              </label>
              <input
                type="text"
                id="gamingMode"
                name="gamingMode"
                value={formData.gamingMode}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>

            {/* Stream URL */}
            <div className="mb-4">
              <label
                htmlFor="streamURL"
                className="block text-white  font-bold mb-2"
              >
                Stream URL
              </label>
              <input
                type="text"
                id="streamURL"
                name="streamURL"
                value={formData.streamURL}
                onChange={handleChange}
                className="w-full px-3 py-2  bg-slate-800 "
                required
              />
            </div>
          </div>
        </div>

        {/* Matches */}
        <div className="mb-4">
          <label htmlFor="matches" className="block text-white  font-bold mb-2">
            Matches
          </label>
          <select
            id="matches"
            name="matches"
            value={formData.matches}
            onChange={handleChange}
            className="w-full px-3 py-2  bg-slate-800 "
            required
          >
            <option value="upcoming">Upcoming</option>
            <option value="finished">Finished</option>
          </select>
        </div>

        <div className="flex  mt-4 justify-center">
          <button
            type="submit"
            className="bg-green-500  px-4 py-3 custom-button text-black w-1/2 hover:bg-blue-600"
          >
            Create Tournament
          </button>
        </div>
      </form>
    </div>
  );
};

export default MatchFixereManage;
