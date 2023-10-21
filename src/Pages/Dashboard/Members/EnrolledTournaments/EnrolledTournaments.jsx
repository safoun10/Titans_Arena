import React, { useEffect, useState } from "react";
import Title from "../../../../Components/Shared/AnimatedTitle/Titile";
import useAuth from "../../../../Hooks/useAuth";
import EnrolledTournamentsCard from "./EnrolledTournamentsCard";

function EnrolledTournaments() {
  const [enrolledTournaments, setEnrolledTournaments] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    // Function to fetch enrolledTournamentsId for a user
    const fetchEnrolledTournaments = async () => {
      try {
        const response = await fetch(
          `https://titans-arena-server.vercel.app/enrolledTournaments/${user?.email}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setEnrolledTournaments(data.enrolledTournamentsId);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching enrolledTournamentsId:", error);
      }
    };

    fetchEnrolledTournaments();
  }, [user?.email]);

  return (
    // start
    <div>
      <Title primaryText="My Enrolled" secondaryText="Tournaments" />
      <div className="grid place-items-center grid-cols-1 gap-10 ">
        {enrolledTournaments?.map((tournamentId) => (
          <EnrolledTournamentsCard tournamentId={tournamentId} />
        ))}
      </div>
    </div>
  );
}

export default EnrolledTournaments;
