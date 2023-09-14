import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MatchCard from "./MatchCard";

const Matches = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get("https://titans-arena-server.vercel.app/espMatchFixered")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const upcomingMatches = data.filter((match) => match.matches === "upcoming");
  const finishedMatches = data.filter((match) => match.matches === "finished");

  return (
    <div className="container mx-auto text-center ">
      <Tabs>
        <TabList className="  text-1xl font-bold text-white uppercase underline">
          <Tab
            classID=""
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
            }}
            onClick={() => setShowAll(true)}
          >
            All Matches
          </Tab>
          <Tab
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
            }}
            onClick={() => setShowAll(false)}
          >
            Upcoming Matches
          </Tab>
          <Tab
            style={{
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px))",
            }}
            onClick={() => setShowAll(false)}
          >
            Finished Matches
          </Tab>
        </TabList>

        <TabPanel>
          {showAll &&
            data.map((match, index) => <MatchCard key={index} match={match} />)}
        </TabPanel>
        <TabPanel>
          {!showAll &&
            upcomingMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
        </TabPanel>
        <TabPanel>
          {!showAll &&
            finishedMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Matches;
