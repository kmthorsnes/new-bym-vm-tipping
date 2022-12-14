import { useState } from "react";
import SisteResultatKort from "./SisteResultatKort";
import { useEffect } from "react";

const SisteResultater = () => {
  // Fetch the latest completed matches from the API
  const [matches, setMatches] = useState<any[]>([]);
  useEffect(() => {
    async function fetchMatches() {
      const response = await fetch("https://worldcupjson.net/matches");
      const matches = await response.json();
      // Filter out only the latest completed matches
      const latestCompletedMatches = matches.filter(
        (match: {
          status: string;
          datetime: string | number | Date | any;
          home_team: any;
          away_team: any;
          stage_name: string;
        }) => {
          // Check that the match is completed and is from the last 5 days
          return (
            match.status === "completed" && match.stage_name === "Semi-final" &&
            Date.now() - new Date(match.datetime).getTime() < 5 * 24 * 60 * 60 * 1000
          );

        }
      );
      setMatches(latestCompletedMatches);
    }
    fetchMatches();
  }, []);

  // Render the matches in the table
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2} className="text-left text-3xl">
            Siste resultater:
          </th>
        </tr>
      </thead>
      <tbody>
        {matches.map(
          (
            match // set any type for home_team and away_team
          ) => (
            <SisteResultatKort
              hjemmelag={match.home_team.name}
              hjemmelagScore={match.home_team.goals}
              bortelag={match.away_team.name}
              bortelagScore={match.away_team.goals}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default SisteResultater;
