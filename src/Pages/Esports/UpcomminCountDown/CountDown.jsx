import React from "react";

const CountDown = ({ match }) => {
  return (
    <div>
      <div>
        <h2>Upcoming Esports Matches</h2>
        <ul>
          <li>
            <h3>{match.tournamentName}</h3>
            <p>{match.matchDescription}</p>
            <p>Date: {match.matchDate}</p>
            <p>Time: {match.matchTime}</p>
            {/* Add Countdown Timer */}
            <Countdown
              date={new Date(`${match.matchDate}T${match.matchTime}:00`)}
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  return <span>Match has started!</span>;
                } else {
                  return (
                    <div>
                      <p>Countdown:</p>
                      <p>
                        {days}d {hours}h {minutes}m {seconds}s
                      </p>
                    </div>
                  );
                }
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountDown;
