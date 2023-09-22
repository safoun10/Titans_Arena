import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleTournamentDetails = () => {
  const [singleTournament, setSingleTournament] = useState({});
  const { tournament_name } = singleTournament; // Destructure the specific property you need
  const { id } = useParams();

  useEffect(() => {
    // Make sure to use the `id` from useParams inside the axios request
    axios
      .get(`https://titans-arena-server.vercel.app/tournaments/${id}`)
      .then((response) => {
        setSingleTournament(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]); // Include `id` as a dependency so that the effect runs when it changes

  return (
    <div className="pt-20">
      <h3 className="text-5xl text-center font-bold text-white">
        {tournament_name}
      </h3>
    </div>
  );
};

export default SingleTournamentDetails;
